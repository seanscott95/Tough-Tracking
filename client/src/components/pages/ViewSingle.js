import React from 'react'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import WorkoutSingle from '../WorkoutSingle';
import { QUERY_SINGLE_WORKOUT } from '../../utils/queries';

// 627b7629f1ca146788f51c9c
export default function ViewSingle() {
  const { workoutId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT, {
    variables: { workoutId: workoutId },
  });

  console.log(data)
  const workout = data?.getSingleWorkout || {};
  console.log('exercises', workout);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <ul>
            <li key={workout._id + 'name'}>
              Name of workout - {workout.name}
            </li>
            <li key={workout.id + 'createdAt'}>
              Created At - {workout.createdAt}
            </li>
            <li>
              <ul>
                {workout.exercises.map((e) => {
                  return (
                    <>
                      <li key={e._id + 'exerciseName'}>exercise name - {e.name}</li>
                      <li key={e._id + 'type'}>type - {e.type}</li>
                      <li key={e._id + 'weight'}>{e.weight || ''}</li>
                      <li key={e._id + 'sets'}>{e.sets || ''}</li>
                      <li key={e._id + 'reps'}>{e.reps || ''}</li>
                      <li key={e._id + 'time'}>{e.time || ''}</li>
                      <li key={e._id + 'intensity'}>{e.intensity || ''}</li>
                    </>
                  )
                })}
              </ul>
            </li>
            <button>Edit</button>
          </ul>
      </div>
    </>
  )
}
