import React from 'react'
import { CardInner } from '../components/styles/Card.styled';

export default function ExerciseReadOnly({ exercises }) {
    return (
        <CardInner as="li">
            <ul>
                <li>{exercises.name}</li>
                <li>{exercises.type}</li>
                {exercises.type === 'Strength' ?
                    <ol>
                        <li>{`${exercises.weight} kg's`}</li>
                        <li>{`${exercises.sets} sets`}</li>
                        <li>{`${exercises.reps} reps`}</li>
                    </ol>
                    : ''}
                {exercises.type === 'Cardio' ?
                    <ol>
                        <li>{`${exercises.distance} km's`}</li>
                        <li>{`${exercises.time} min`}</li>
                        <li>{exercises.intensity}</li>
                    </ol>
                    : ''}
            </ul>
        </CardInner>
    )
}
