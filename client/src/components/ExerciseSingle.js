import React from 'react'

import { StyledForm } from './styles/Form.styled'
import { StyledCard } from './styles/Card.styled'

export default function ExerciseSingle({
    exercises,
    handleExerciseChange }) {

    return (
        <StyledCard>
            <div id='addExercise' className='card'>
                {exercises.map((item) => {
                    return (
                        <div key={item._id}>
                            <div className='card'>

                            <div>
                                <label htmlFor="name">Name:</label>
                                <input

                                    type="text"
                                    name="name"
                                    value={item.name}
                                    onChange={(e) => handleExerciseChange(e, item._id)}
                                    placeholder='Benchpress, Running, Swimming...'
                                    required />
                            </div>
                            <div>
                                <label htmlFor="type">Type:</label>
                                <select
                                    type="text"
                                    name="type"
                                    value={item.type}
                                    onChange={(e) => handleExerciseChange(e, item._id)}
                                    required >
                                    <option value='strength'>Strength</option>
                                    <option value='cardio'>Cardio</option>
                                </select>
                            </div>

                            {item.type === 'strength' ? (
                                <>
                                    <div>
                                        <label htmlFor="weight">Weight:</label>
                                        <input
                                            type="number"
                                            name="weight"
                                            min="0"
                                            max="500"
                                            step=".5"
                                            placeholder='50...'
                                            value={item.weight}
                                            onChange={(e) => handleExerciseChange(e, item._id)}
                                            required />
                                    </div>
                                    <div>
                                        <label htmlFor="sets">Sets:</label>
                                        <input
                                            type="number"
                                            name="sets"
                                            min="1"
                                            max="10"
                                            step="1"
                                            placeholder='3...'
                                            value={item.sets}
                                            onChange={(e) => handleExerciseChange(e, item._id)}
                                            required />
                                    </div>
                                    <div>
                                        <label htmlFor="reps">Reps:</label>
                                        <input
                                            type="number"
                                            name="reps"
                                            min="1"
                                            max="10"
                                            step="1"
                                            placeholder='8...'
                                            value={item.reps}
                                            onChange={(e) => handleExerciseChange(e, item._id)}
                                            required />
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}

                            {item.type === 'cardio' ? (
                                <>
                                    <div>
                                        <label htmlFor="distance">Distance:</label>
                                        <input
                                            type="number"
                                            name="distance"
                                            min="1"
                                            max="1000"
                                            step="1"
                                            placeholder='5.4'
                                            value={item.distance}
                                            onChange={(e) => handleExerciseChange(e, item._id)}
                                            required />
                                    </div>
                                    <div>
                                        <label htmlFor="time">Time:</label>
                                        <input
                                            type="number"
                                            name="time"
                                            min="1"
                                            max="1440"
                                            step="1"
                                            placeholder='45min...'
                                            value={item.time}
                                            onChange={(e) => handleExerciseChange(e, item._id)}
                                            required />
                                    </div>
                                    <div>
                                        <label htmlFor="intensity">Intensity:</label>
                                        <select
                                            name="intensity"
                                            value={item.intensity}
                                            onChange={(e) => handleExerciseChange(e, item._id)}
                                            required >
                                            <option value='low'>Low</option>
                                            <option value='moderate'>Moderate</option>
                                            <option value='high'>High</option>
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </StyledCard>
    )
}
