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
    <div>  
        <div>
            <h2>Date and Name</h2>
            {temp.map((item) => (
              <ul>
                <li key={item.name}>
                  Name of workout - {item.name}
                </li>
                <li key={item.createdAt}>
                  Name of workout - {item.createdAt}
                </li>
              </ul>
            ))}
        </div>
        <button>View</button>
    </div>
  )
}

// <li key='exerciseName'>
// Name of exercises - {item.exercises.name}
// </li>