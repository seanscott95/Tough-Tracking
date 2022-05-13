import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_SINGLE_WORKOUT } from '../../utils/queries';
import { EDIT_WORKOUT } from '../../utils/mutations';

import { WorkoutPagesContainer } from '../styles/WorkoutPagesContainer.styled';
import WorkoutSingle from '../WorkoutSingle';
import ExerciseReadOnly from '../ExerciseReadOnly';

export default function ViewSingle() {
  const [isEditMode, setIsEditMode] = useState(false);

  const { workoutId } = useParams();

  const [editWorkout, { errorMutation }] = useMutation(EDIT_WORKOUT);

  const [exerciseList, setExerciseList] = useState([]);

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
    console.log(data);
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

  const saveBtnHandler = async () => {

    // await editWorkout({
    //   variables: {
    //     data: {
    //       exercises: workoutForm,
    //       name: workoutName
    //     }
    //   }
    // })

    setIsEditMode(false);
  }

  const handleExerciseChange = (e) => {
    const { name, value } = e.target;

    setWorkoutForm({
      ...workoutForm,
      [name]: value,
    });
  };

  if (error) {
    return <div>Sorry there was an error... - {error.message}</div>;
  }
  if (loading) {
    return <div>Sorry, still loading...</div>;
  }

  return (
    <WorkoutPagesContainer>
      {isEditMode ? (
        <div>
          <WorkoutSingle
            exercises={workout.exercises}
            workoutForm={workoutForm}
            workoutName={workoutName}
            handleExerciseChange={handleExerciseChange}
            handleNameChange={handleNameChange}
          />
        </div>
      ) : (
        <ul>
          <li>{workout.name} - {workout.createdAt}</li>
          {workout.exercises.map((exercises) => {
            <ExerciseReadOnly exercises={exercises} />
            { console.log('VSO - exercises', exercises) }
            {/* exercises - object*/ }

          })}
          {console.log('VS - workout.exercises', workout.exercises)}
          {/* workout.exercises - Array of objects */}
        </ul>
      )}
      <button id='editBtn' className={isEditMode ? 'hide' : ''} onClick={editBtnHandler}>Edit</button>
      <button id='saveBtn' className={isEditMode ? '' : 'hide'} onClick={saveBtnHandler}>Save</button>
      {errorMutation && (
        <div>
          {errorMutation.message}
        </div>
      )}
    </WorkoutPagesContainer>
  )
}