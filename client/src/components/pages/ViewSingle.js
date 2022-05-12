import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_WORKOUT } from '../../utils/queries';
import { StyledForm } from '../styles/Form.styled';
import '../styles/ViewSingle.css';

export default function ViewSingle() {
  const { workoutId } = useParams();

  const { loading, error, data } = useQuery(QUERY_SINGLE_WORKOUT, {
    variables: { workoutId: workoutId },
  });

  const workout = data?.getSingleWorkout || {};

 

  const [isEditMode, setIsEditMode] = useState(false);

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

  const [workoutName, setWorkoutName] = useState('');

  useEffect(() => {
    console.log(data);
    if (!data) {
      return ;
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
    return <div>Error...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isEditMode ? (
      <>
        <h3>Edit your workout:</h3>
        <StyledForm id='addExercise'>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={workoutForm.name}
              onChange={handleExerciseChange}
              placeholder='Benchpress, Running, Swimming...'
              required />
          </div>
          <div>
            <label htmlFor="type">Type:</label>
            <select
              type="text"
              name="type"
              value={workoutForm.type}
              onChange={handleExerciseChange}
              required >
              <option value='strength'>Strength</option>
              <option value='cardio'>Cardio</option>
            </select>
          </div>

          {workoutForm.type === 'strength' ? (
            <>
              <div>
                <label htmlFor="weight">Weight:</label>
                <input
                  type="number"
                  name="weight"
                  min="0"
                  max="500"
                  step=".5"
                  placeholder='50...'
                  value={workoutForm.weight}
                  onChange={handleExerciseChange}
                  required />
              </div>
              <div>
                <label htmlFor="sets">Sets:</label>
                <input
                  type="number"
                  name="sets"
                  min="1"
                  max="10"
                  step="1"
                  placeholder='3...'
                  value={workoutForm.sets}
                  onChange={handleExerciseChange}
                  required />
              </div>
              <div>
                <label htmlFor="reps">Reps:</label>
                <input
                  type="number"
                  name="reps"
                  min="1"
                  max="10"
                  step="1"
                  placeholder='8...'
                  value={workoutForm.reps}
                  onChange={handleExerciseChange}
                  required />
              </div>
            </>
          ) : (
            <></>
          )}
          {workoutForm.type === 'cardio' ? (
            <>
              <div>
                <label htmlFor="distance">Distance:</label>
                <input
                  type="number"
                  name="distance"
                  min="1"
                  max="1000"
                  step="1"
                  placeholder='5.4'
                  value={workoutForm.distance}
                  onChange={handleExerciseChange}
                  required />
              </div>
              <div>
                <label htmlFor="time">Time:</label>
                <input
                  type="number"
                  name="time"
                  min="1"
                  max="1440"
                  step="1"
                  placeholder='45min...'
                  value={workoutForm.time}
                  onChange={handleExerciseChange}
                  required />
              </div>
              <div>
                <label htmlFor="intensity">Intensity:</label>
                <select
                  name="intensity"
                  value={workoutForm.intensity}
                  onChange={handleExerciseChange}
                  required >
                  <option value='low'>Low</option>
                  <option value='moderate'>Moderate</option>
                  <option value='high'>High</option>
                </select>
              </div>
            </>
          ) : (
            <></>
          )}
        </StyledForm>
        <div>
          <p>Once you have edited all your exercises click save workout to finish.</p>
          <div>
            <label htmlFor="workoutName">Workout Name:</label>
            <input
              type="text"
              name="workoutName"
              placeholder='Sunday, Gym, Workout...'
              onChange={handleNameChange}
              value={workoutName}
              required />
          </div>
        </div>
      </>
      ) : (
      <ul>
        <li>Name of workout - {workout.name}</li>
        <li>Created At - {workout.createdAt}</li>
        <li>
          {workout.exercises.map((e) => {
            return (
              <ul key={e._id}>
                <li>exercise name - {e.name}</li>
                <li>{e.type}</li>
                <li>{e.weight || ''}</li>
                <li>{e.sets || ''}</li>
                <li>{e.reps || ''}</li>
                <li>{e.time || ''}</li>
                <li>{e.intensity || ''}</li>
              </ul>
            )
          })}
        </li>
      </ul>
      )}
      <button id='editBtn' className={isEditMode ? 'hide' : ''} onClick={editBtnHandler}>Edit</button>
      <button id='saveBtn' className={isEditMode ? '' : 'hide'} onClick={saveBtnHandler}>Save</button>
    </>
  )
}
