import React from 'react'

export default function ExerciseReadOnly({ exercises }) {
    console.log('ERO', exercises)
    return (
        <li className='cardInner'>
            <ul>
                <li>{exercises.name}</li>
                <li>{exercises.type}</li>
                {exercises.type === 'strength' ?
                    <>
                        <li>{`${exercises.weight} kg's`}</li>
                        <li>{`${exercises.sets} sets`}</li>
                        <li>{`${exercises.reps} reps`}</li>
                    </>
                    : ''}
                {exercises.type === 'cardio' ?
                    <>
                        <li>{`${exercises.distance} km's`}</li>
                        <li>{`${exercises.time} min`}</li>
                        <li>{exercises.intensity}</li>
                    </>
                    : ''}
            </ul>
        </li>
    )
}
