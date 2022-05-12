import React from 'react'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import WorkoutSingle from '../WorkoutSingle';
import { QUERY_SINGLE_WORKOUT } from '../../utils/queries';


export default function ViewSingle() {
  const { workoutId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT, {
    variables: { workoutId: workoutId },
  });

  console.log(data)
  const workout = data?.workout || {};
  console.log('workout', workout);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>

      {/* Views a single workout */}
      <div>
        <WorkoutSingle workout={workout}/>
      </div>
    </>
  )
}
