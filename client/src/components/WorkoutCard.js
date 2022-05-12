import React from 'react'
import { useQuery } from '@apollo/client';

import { QUERY_WORKOUTS } from '../utils/queries'

export default function WorkoutCard() {

  const { loading, data } = useQuery(QUERY_WORKOUTS);
  const temp = data?.getWorkouts
  console.log('temp', temp)
  console.log('data', data)

  if (loading) {
    return <div>Sorry, still loading</div>
  }

  return (
    <>
      <div>
        {temp.map((item) => (
          <ul>
            <li key={item._id + 'name'}>
              Name of workout - {item.name}
            </li>
            <li key={item.id + 'createdAt'}>
              Created At - {item.createdAt}
            </li>
            <li>
              <ul>
                {item.exercises.map((e) => {
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
            <button>View</button>
          </ul>
        ))}
      </div>
    </>
  )
}