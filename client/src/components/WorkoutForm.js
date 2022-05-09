import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';

export default function WorkoutForm() {

    const [exerciseList, setExerciseList] = useState([]);

    // let exerciseList = [];

    const [exerciseFormState, setExerciseFormState] = useState({
        name: '',
        type: 'strength',
        weight: '',
        sets: '',
        reps: '',
        distance: '',
        time: '',
        intensity: '',
    });

    const handleExerciseChange = (e) => {
        const { name, value } = e.target;

        setExerciseFormState({
            ...exerciseFormState,
            [name]: value,
        });
    };


    const handleSubmitExercise = (e) => {
        e.preventDefault();

        const temp = exerciseList;
        temp.push(exerciseFormState)
        setExerciseList(temp);

        setExerciseFormState({
            name: '',
            type: 'strength',
            weight: '',
            sets: '',
            reps: '',
            distance: '',
            time: '',
            intensity: '',
        });
    }

    return (
        <>
            <div>
                <h3>Todays workout:</h3>
                {exerciseList.map((item) => (
                    <div key={item.name}>
                        <p>Exercise - {item.name}</p>
                    </div>
                )
                )}
                <p>Once you have added all your exercises click save workout to finish.</p>
                <button>Save Workout</button>
            </div>
            <h3>Add an exercise to your workout:</h3>
            <StyledForm id='addExercise' onSubmit={handleSubmitExercise}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={exerciseFormState.name}
                        onChange={handleExerciseChange}
                        placeholder='Benchpress, Running, Swimming...'
                        required />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select
                        type="text"
                        name="type"
                        value={exerciseFormState.type}
                        onChange={handleExerciseChange}
                        required >
                        <option value='strength'>Strength</option>
                        <option value='cardio'>Cardio</option>
                    </select>
                </div>

                {exerciseFormState.type === 'strength' ? (
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
                                value={exerciseFormState.weight}
                                onChange={handleExerciseChange}
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
                                value={exerciseFormState.sets}
                                onChange={handleExerciseChange}
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
                                value={exerciseFormState.reps}
                                onChange={handleExerciseChange}
                                required />
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {exerciseFormState.type === 'cardio' ? (
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
                                value={exerciseFormState.distance}
                                onChange={handleExerciseChange}
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
                                value={exerciseFormState.time}
                                onChange={handleExerciseChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="intensity">Intensity:</label>
                            <select
                                name="intensity"
                                value={exerciseFormState.intensity}
                                onChange={handleExerciseChange}
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
                < div >
                    <button type="submit">Add</button>
                </div>
            </StyledForm>
        </>
    )
}
