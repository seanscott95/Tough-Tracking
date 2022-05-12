import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate  } from "react-router-dom";

import { QUERY_WORKOUTS } from '../utils/queries'

export default function WorkoutCard() {

  const { loading, data } = useQuery(QUERY_WORKOUTS);
  const temp = data?.getWorkouts

  let navigate  = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const id = e.target.value;
    navigate(`/viewSingle/${id}`);
  }

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
            <button
              key={item._id}
              id={item._id}
              value={item._id}
              onClick={handleClick}
            >View</button>
          </ul>
        ))}
      </div>
    </>
  )
}