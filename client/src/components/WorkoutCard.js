import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import ExerciseReadOnly from './ExerciseReadOnly';
import { QUERY_WORKOUTS } from '../utils/queries'

export default function WorkoutCard() {

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
            <div>
                {temp.map((item) => (
                    <ul key={item._id}>
                        <li>Name of workout - {item.name}</li>
                        <li>Created At - {item.createdAt}</li>
                        <li>
                            <ExerciseReadOnly
                                exercises={item.exercises}
                            />
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