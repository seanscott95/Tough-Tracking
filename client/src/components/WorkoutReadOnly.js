import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { StyledCard } from './styles/Card.styled';
import ExerciseReadOnly from './ExerciseReadOnly';
import { QUERY_WORKOUTS } from '../utils/queries'

export default function WorkoutReadOnly() {

    const { loading, error, data } = useQuery(QUERY_WORKOUTS);
    const exercisesDB = data?.getWorkouts || [];

    let navigate = useNavigate();

    const handleViewClick = (e) => {
        e.preventDefault();
        const id = e.target.value;
        navigate(`/viewSingle/${id}`);
    }

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
        <div className='flexRow'>
            <h2>Your Workouts</h2>
            <p>Here's a detailed version of all your workouts in one place!</p>
            {temp.map((item) => (
                <StyledCard>
                    <ul key={item._id} className='card'>
                        <li>{item.name} - {item.createdAt}</li>
                        <div className='flexRow'>
                            {item.exercises.map((exercises) => (
                                <StyledCard>
                                    <ExerciseReadOnly exercises={exercises} />
                                </StyledCard>
                            ))}
                        </div>
                        <button
                            key={item._id}
                            id={item._id}
                            value={item._id}
                            onClick={handleViewClick}
                        >View</button>
                    </ul>
                </StyledCard>
            ))}
        </div>
    )
}