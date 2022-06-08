import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { QUERY_SINGLE_WORKOUT, QUERY_WORKOUTS } from '../../utils/queries';
import { EDIT_WORKOUT, DELETE_WORKOUT } from '../../utils/mutations';
import WorkoutSingle from '../WorkoutSingle';
import ExerciseReadOnly from '../ExerciseReadOnly';
import { PageContainer } from '../styles/PageContainer.styled';
import { StyledCard } from '../styles/Card.styled';
import { Flex } from '../styles/Flex.styled';

export default function ViewSingle() {
  
  const [isEditMode, setIsEditMode] = useState(false);

  // Navigate hook allows app to navigate to a different page without refreshing
  let navigate = useNavigate();

  // Creates a variables using the id in the parameters with the useParams hook
  const { workoutId } = useParams();

  // Mutations for creating and deleting a workout in the mongo db
  const [editWorkout, { errorEditMutation }] = useMutation(EDIT_WORKOUT);
  const [deleteWorkout, { errorDeleteMutation }] = useMutation(DELETE_WORKOUT, {
    refetchQueries: [
      QUERY_WORKOUTS,
      'getWorkouts'
    ],
  });

  // State variables that holds the workout name and the workout exercises from the form
  const [workoutName, setWorkoutName] = useState('');
  const [workoutForm, setWorkoutForm] = useState({
    name: '',
    type: 'strength',
    weight: '',
    sets: '',
    reps: '',
    distance: '',
    time: '',
    intensity: '',
  });

  // Queries a single workout depending on the id in the url params
  const { loading, error, data, refetch: refetchWorkout } = useQuery(QUERY_SINGLE_WORKOUT, {
    variables: { workoutId: workoutId },
    onCompleted(data) {
      setWorkoutName(data.getSingleWorkout.name);
    }
  });
  const workout = data?.getSingleWorkout || {};

  // Sets the workout form state variable values being used in the form from the queried workout
  useEffect(() => {
    if (!data) {
      return;
    }
    setWorkoutForm(data.getSingleWorkout);
  }, [data])

  // Sets the workout name state variable value to the workout name inputted in the form
  const handleNameChange = (e) => {
    const { value } = e.target;
    setWorkoutName(value);
  };

  // Changes the is edit mode state variable to true
  const editBtnHandler = () => {
    setIsEditMode(true);
  }

  // Delete handler for deleting a workout using the workout id, sets is edit mode to true and 
  // navigates to the dashboard
  const deleteBtnHandler = async () => {
    await deleteWorkout({
      variables: {
        workoutId: workout._id,
      }
    })
    setIsEditMode(true);
    navigate('/dashboard');
  }

  // Save handler that edits a workout using the values inputted in the form, updates the workouts
  // and sets the is edit mode state to false
  const saveBtnHandler = async () => {
    await editWorkout({
      variables: {
        data: {
          _id: workout._id,
          exercises: workoutForm.exercises.map((item) => {
            return {
              _id: item._id,
              name: item.name,
              type: item.type,
              weight: Number(item.weight),
              sets: Number(item.sets),
              reps: Number(item.reps),
              distance: Number(item.distance),
              time: Number(item.time),
              intensity: item.intensity,
            }
          }),
          createdAt: workoutForm.createdAt,
          name: workoutName
        }
      }
    })

    await refetchWorkout();
    setIsEditMode(false);
  }

  // Changes the exercises in the db with the new inputted values depending if the exercise has the
  // same id as the one in the db, if there is no match in id the value remains
  const handleExerciseChange = (e, id) => {
    const { name, value } = e.target;

    let currentExercises = workoutForm.exercises;
    const newExercises = currentExercises.map((ex) => {
      if (ex._id === id) {

        return {
          ...ex,
          [name]: value,
        }
      } else {
        return {
          ...ex
        }
      }
    });
    setWorkoutForm({
      ...workoutForm,
      exercises: newExercises,
    });
  };

  if (error) {
    return <div>Sorry there was an error... - {error.message}</div>;
  }
  if (loading) {
    return <div>Sorry, still loading...</div>;
  }

  return (
    <PageContainer>
      <StyledCard>
        <div className='card'>
          {isEditMode ? (
            <>
              <WorkoutSingle
                exercises={workoutForm.exercises}
                workoutForm={workoutForm}
                workoutName={workoutName}
                handleExerciseChange={handleExerciseChange}
                handleNameChange={handleNameChange}
              />
            </>
          ) : (
            <StyledCard>
              <ul className='card'>
                <li>{workout.name} - {workout.createdAt}</li>
                <Flex>
                  {workout.exercises.map((exercises) => (
                    <StyledCard>
                      <ExerciseReadOnly exercises={exercises} />
                    </StyledCard>
                  )
                  )}
                </Flex>
              </ul>
            </StyledCard>
          )}
          <Flex>
            <button className={isEditMode ? 'hide' : ''} onClick={editBtnHandler}>Edit</button>
            <button className={isEditMode ? '' : 'hide'} onClick={saveBtnHandler}>Save</button>
            <button className={isEditMode ? '' : 'hide'} onClick={deleteBtnHandler}>Delete</button>
          </Flex>
          {errorEditMutation && (
            <div>
              {errorEditMutation.message}
            </div>
          )}
          {errorDeleteMutation && (
            <div>
              {errorDeleteMutation.message}
            </div>
          )}
        </div>
      </StyledCard>
    </PageContainer>
  )
}