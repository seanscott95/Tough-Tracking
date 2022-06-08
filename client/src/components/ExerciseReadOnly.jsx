import React from 'react'
import { CardInner} from '../components/styles/Card.styled';

export default function ExerciseReadOnly({ exercises }) {
    return (
        <CardInner as="li">
            <ul>
                <li>{exercises.name}</li>
                <li>{exercises.type}</li>
                {exercises.type === 'Strength' ?
                    <>
                        <li>{`${exercises.weight} kg's`}</li>
                        <li>{`${exercises.sets} sets`}</li>
                        <li>{`${exercises.reps} reps`}</li>
                    </>
                    : ''}
                {exercises.type === 'Cardio' ?
                    <>
                        <li>{`${exercises.distance} km's`}</li>
                        <li>{`${exercises.time} min`}</li>
                        <li>{exercises.intensity}</li>
                    </>
                    : ''}
            </ul>
        </CardInner>
    )
}