import React from 'react'
import { useQuery } from '@apollo/client';

import { QUERY_WORKOUTS_SUMMARY } from '../utils/queries'

export default function WorkoutCardSmall() {

  const { loadingSummary, dataSummary } = useQuery(QUERY_WORKOUTS_SUMMARY);
  const summaryList = dataSummary?.getWorkouts

  if (loadingSummary) {
    return <div>Sorry, still loading</div>
  }

  return (
    <div>  
        <div>
            <h2>Date and Name</h2>
            {summaryList.map((item) => (
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
