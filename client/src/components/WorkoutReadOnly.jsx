import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { StyledCard } from './styles/Card.styled';
import ExerciseReadOnly from './ExerciseReadOnly';
import { QUERY_WORKOUTS } from '../utils/queries';
import { Flex, FlexColumn } from '../components/styles/Flex.styled';

export default function WorkoutReadOnly() {
    
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
                <div className='card'>
                    <p>No Workouts Yet.</p>
                    <p>Click the button to create a workout.</p>
                    <p>Lets Get Started!</p>
                    <button onClick={handleCreateClick}>Create Workout</button>
                </div>
            </StyledCard>
        )
    }

    return (
        <FlexColumn>
            <StyledCard>
                <div className='card'>
                    <h2>Your Workouts</h2>
                    <p>Here's a detailed version of all your workouts in one place!</p>
                </div>
            </StyledCard>

            <Flex>
                {exercisesDB.map((item) => (
                    <StyledCard>
                        <ul key={item._id} className='card'>
                            <li>{item.name} - {item.createdAt}</li>
                            <Flex>
                                {item.exercises.map((exercises) => (
                                    <StyledCard>
                                        <ExerciseReadOnly exercises={exercises} />
                                    </StyledCard>
                                ))}
                            </Flex>
                            <button
                                key={item._id}
                                id={item._id}
                                value={item._id}
                                onClick={handleViewClick}
                            >View</button>
                        </ul>
                    </StyledCard>
                ))}
            </Flex>
        </FlexColumn>
    )
}