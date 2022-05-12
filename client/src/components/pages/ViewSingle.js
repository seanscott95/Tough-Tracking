import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import '../styles/ViewSingle.css';
import { QUERY_SINGLE_WORKOUT } from '../../utils/queries';

export default function ViewSingle() {
  const { workoutId } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const [workoutForm, setWorkoutForm] = useState({});

  const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT, {
    variables: { workoutId: workoutId },
  });

  const workout = data?.getSingleWorkout || {};

  useEffect(() => {
    setWorkoutForm(data);
  }, [data])

  const editBtnHandler = () => {
    setIsEditMode(true);
 

  }

  const saveBtnHandler = () => {
    // await EditWorkout({
    //   variables: {
    //     data: workoutForm
    //   }
    // })
    setIsEditMode(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        <li key={workout._id + 'name'}>
          Name of workout - {workout.name}
        </li>
        <li key={workout.id + 'createdAt'}>
          Created At - {workout.createdAt}
        </li>
        <li>
    
            {workout.exercises.map((e) => {
              return (
                <ul key={e._id}>
                  <li key={e._id + 'exerciseName'}>exercise name - {e.name}</li>
                  <li key={e._id + 'type'}>type - {e.type}</li>
                  <li key={e._id + 'weight'}>{e.weight || ''}</li>
                  <li key={e._id + 'sets'}>{e.sets || ''}</li>
                  <li key={e._id + 'reps'}>{e.reps || ''}</li>
                  <li key={e._id + 'time'}>{e.time || ''}</li>
                  <li key={e._id + 'intensity'}>{e.intensity || ''}</li>
                </ul>
              )
            })}
        
        </li>
        <button id='editBtn' className={isEditMode ? 'hide' : ''} onClick={editBtnHandler}>Edit</button>
        <button id='saveBtn' className={isEditMode ? '' : 'hide'} onClick={saveBtnHandler}>Save</button>
      </ul>
    </>
  )
}
