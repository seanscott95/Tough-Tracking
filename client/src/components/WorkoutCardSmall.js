import React from 'react'
import { useQuery } from '@apollo/client';

import { QUERY_WORKOUTS_SUMMARY } from '../utils/queries'

export default function WorkoutCardSmall() {

  const { loading, data } = useQuery(QUERY_WORKOUTS_SUMMARY);
  const temp = data?.getWorkouts
  console.log('temp', temp)
  console.log('data', data)

  if (loading) {
    return <div>Sorry, still loading</div>
  }

  return (
    <>
      <div>
        <h2>Date and Name</h2>
        {temp.map((item) => (
          <ul>
            <li key={item.name}>
              Name of workout - {item.name}
            </li>
            <li key={item.createdAt}>
              Created At - {item.createdAt}
            </li>
            <li key={item.exercises.name}>
              Exercise name - {item.exercises.name}
            </li>
            <li>
              <ul>
                {item.exercises.map((e) => {
                  return <li key={e._id}>{e.name}</li>
                })}
              </ul>
            </li>
          </ul>
        ))}
      </div>
      <button>View</button>
    </>
  )
}