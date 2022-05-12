import React from 'react'
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

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
                            <ul>
                                {item.exercises.map((e) => {
                                    return (
                                        <>
                                            <li>exercise name - {e.name}</li>
                                            <li>type - {e.type}</li>
                                            <li>{e.weight || ''}</li>
                                            <li>{e.sets || ''}</li>
                                            <li>{e.reps || ''}</li>
                                            <li>{e.time || ''}</li>
                                            <li>{e.intensity || ''}</li>
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