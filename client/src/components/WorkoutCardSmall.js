import React from 'react'
import { useQuery } from '@apollo/client';

import { QUERY_WORKOUTS_SUMMARY } from '../utils/queries'

export default function WorkoutCardSmall() {

  const { loading, data } = useQuery(QUERY_WORKOUTS_SUMMARY);
  const temp = data?.getWorkouts
  console.log(temp)

  return (
    <div>  
        <div>
            <h2>Date and Name</h2>
            {/* {temp.map((item) => (
              <ul>
                <li>
                  Name of workout - {item.name}
                </li>
                <li>
                  Name of workout - {item.createdAt}
                </li>
                <li>
                  Name of exercises - {item.exercises.name}
                </li>
              </ul>
            ))} */}
        </div>
        <div>
            <div>Exercise</div>
            <div>Exercise</div>
            <div>Exercise...etc</div>
        </div>
        <button>View</button>
    </div>
  )
}
