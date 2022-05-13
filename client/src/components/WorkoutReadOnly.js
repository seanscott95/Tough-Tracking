import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { StyledCard } from './styles/Card.styled';
import ExerciseReadOnly from './ExerciseReadOnly';
import { QUERY_WORKOUTS } from '../utils/queries'

export default function WorkoutReadOnly() {

    const { loading, error, data } = useQuery(QUERY_WORKOUTS);
    const temp = data?.getWorkouts

    let navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        const id = e.target.value;
        navigate(`/viewSingle/${id}`);
    }

    if (error) {
        return <div>Sorry there was an error... - {error.message}</div>;
    }
    if (loading) {
        return <div>Sorry, still loading...</div>
    }

    return (
        <div className='cardContainer'>
            {temp.map((item) => (
                <StyledCard>
                    <ul key={item._id} className='card'>
                        <li>Name of workout - {item.name}</li>
                        <li>Created At - {item.createdAt}</li>
                        {item.exercises.map((exercises) => {
                            <ExerciseReadOnly exercises={exercises} />
                            { console.log('WRO - exercises', exercises) }
                            {/*exercises - object */ }
                        })}
                        {console.log('item ex:', item.exercises)}
                        {/* item.exercises - array of objects */}
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
    )
}