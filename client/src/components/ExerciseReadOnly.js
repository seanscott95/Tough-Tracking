import React from 'react'

export default function ExerciseReadOnly({ exercises }) {

    return (
        <li>
            <ul>
                <li>{exercises.name}</li>
                <li>{exercises.type}</li>
                <li>{exercises.weight || ''}</li>
                <li>{exercises.sets || ''}</li>
                <li>{exercises.reps || ''}</li>
                <li>{exercises.time || ''}</li>
                <li>{exercises.intensity || ''}</li>
            </ul>
        </li>
    )
}
