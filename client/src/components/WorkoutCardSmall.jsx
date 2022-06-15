import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { QUERY_WORKOUTS } from '../utils/queries';
import { StyledCard, CardInner } from './styles/Card.styled';
import { FlexTop } from '../components/styles/Flex.styled';
import { date_month } from '../utils/dateHelper';
import { faCalendarDays, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconContainer } from './styles/FontIcon.styled';

export default function WorkoutCardSmall() {

  // Queries all workouts and returns them and sets them as exercisesDB variable if they exist
  const { loading, error, data } = useQuery(QUERY_WORKOUTS);
  const exercisesDB = data?.getWorkouts || [];

  // Navigate hook allows app to navigate to a different page without refreshing
  let navigate = useNavigate();

  // Navigates using the id of the button, which is set to the workout id, to the single view page
  const handleViewClick = (e) => {
    e.preventDefault();
    const id = e.target.value;
    navigate(`/viewSingle/${id}`);
  }

  // Navigates to the create workout page
  const handleCreateClick = (e) => {
    e.preventDefault();
    navigate(`/createWorkout`);
  }

  if (error) {
    return <div>Sorry there was an error... - {error.message}</div>;
  }
  if (loading) {
    return <div>Sorry, still loading...</div>
  }

  if (!exercisesDB.length) {
    return (
      <StyledCard>
        <CardInner>
          <p>No Workouts Yet.</p>
          <p>Click the button to create a workout.</p>
          <p>Lets Get Started!</p>
          <button onClick={handleCreateClick}>Create Workout</button>
        </CardInner>
      </StyledCard>
    )
  }

  return (
    <>
      <StyledCard>
        <CardInner>
          <h2>Workout Summary</h2>
        </CardInner>
      </StyledCard>
      <FlexTop>
        {exercisesDB.map((item) => (
          <StyledCard>
            <CardInner as="ul">
              <IconContainer>
                <li>
                  <FontAwesomeIcon icon={faDumbbell} />
                  <p>{item.name}</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <p>{date_month(item.createdAt)}</p>
                </li>
              </IconContainer>

              <li>
                <ol>
                  {item.exercises.map((e) => {
                    return <li key={e._id}>{e.name}</li>
                  })}
                </ol>
              </li>
              <button
                key={item._id}
                id={item._id}
                value={item._id}
                onClick={handleViewClick}
              >View</button>
            </CardInner>
          </StyledCard>
        ))}
      </FlexTop>
    </>
  )
}