import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { StyledCard } from './styles/Card.styled';
import { QUERY_WORKOUTS } from '../utils/queries';

export default function WorkoutCardSmall() {

  const { loading, data } = useQuery(QUERY_WORKOUTS);
  const temp = data?.getWorkouts

  let navigate = useNavigate();

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
      <h2>Workout Summary</h2>
      <div className='flexRow'>
        {temp.map((item) => (
          <StyledCard>
            <ul className='card'>
              <li>{item.name}</li>
              <li>{item.createdAt}</li>
              <br/>
              <li>
                <ul>
                  {item.exercises.map((e) => {
                    return <li key={e._id}>{e.name}</li>
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
          </StyledCard>
        ))}
      </div>
    </>
  )
}