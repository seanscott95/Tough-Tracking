import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { QUERY_SINGLE_WORKOUT } from '../../utils/queries';
import { EDIT_WORKOUT, DELETE_WORKOUT } from '../../utils/mutations';
import { PageContainer } from '../styles/PageContainer.styled';
import WorkoutSingle from '../WorkoutSingle';
import ExerciseReadOnly from '../ExerciseReadOnly';
import { StyledCard } from '../styles/Card.styled';

export default function ViewSingle() {
  const [isEditMode, setIsEditMode] = useState(false);
  let navigate = useNavigate();

  const { workoutId } = useParams();
  const [editWorkout, { errorEditMutation }] = useMutation(EDIT_WORKOUT);
  const [deleteWorkout, { errorDeleteMutation }] = useMutation(DELETE_WORKOUT);

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

  const { loading, error, data } = useQuery(QUERY_SINGLE_WORKOUT, {
    variables: { workoutId: workoutId },
    onCompleted(data) {

      setWorkoutName(data.getSingleWorkout.name);
    }
  });
  const workout = data?.getSingleWorkout || {};

  useEffect(() => {
    if (!data) {
      return;
    }
    setWorkoutForm(data.getSingleWorkout);
  }, [data])

  const handleNameChange = (e) => {
    const { value } = e.target;
    setWorkoutName(value);
  };

  const editBtnHandler = () => {
    setIsEditMode(true);
  }

  const deleteBtnHandler = async () => {
    await deleteWorkout({
      variables: {
        workoutId: workout._id,
      }
    })
    setIsEditMode(true);
    navigate('/dashboard');
  }

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

    setIsEditMode(false);
    window.location.reload();
  }

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
      {isEditMode ? (
        <div>
          <WorkoutSingle
            exercises={workoutForm.exercises}
            workoutForm={workoutForm}
            workoutName={workoutName}
            handleExerciseChange={handleExerciseChange}
            handleNameChange={handleNameChange}
          />
        </div>
      ) : (
        <StyledCard>
          <ul className='card'>
            <li>{workout.name} - {workout.createdAt}</li>
            {workout.exercises.map((exercises) => (
                <StyledCard>
                  <ExerciseReadOnly exercises={exercises} />
                </StyledCard>
              )
            )}
          </ul>
        </StyledCard>
      )}
      <button className={isEditMode ? 'hide' : ''} onClick={editBtnHandler}>Edit</button>
      <button className={isEditMode ? '' : 'hide'} onClick={saveBtnHandler}>Save</button>
      <button className={isEditMode ? '' : 'hide'} onClick={deleteBtnHandler}>Delete</button>
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
    </PageContainer>
  )
}