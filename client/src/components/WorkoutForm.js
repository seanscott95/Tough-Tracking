import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_WORKOUT } from '../utils/mutations';
import { StyledForm } from './styles/Form.styled';
import { StyledCard } from './styles/Card.styled';

export default function WorkoutForm() {

    const [exerciseList, setExerciseList] = useState([]);

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

    const [workoutName, setWorkoutName] = useState('');

    const handleExerciseChange = (e) => {
        const { name, value } = e.target;

        setExerciseFormState({
            ...exerciseFormState,
            [name]: value,
        });
    };

    const handleSubmitExercise = (e) => {
        e.preventDefault();

        const list = exerciseList;
        list.push(exerciseFormState)
        setExerciseList(list);

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

    const [createWorkout, { error }] = useMutation(CREATE_WORKOUT);

    const handleCreateWorkout = async (e) => {
        e.preventDefault();

        try {
            const { data } = await createWorkout({
                variables: {
                    name: workoutName,
                    exercises: exerciseList.map((item) => {
                        return {
                            name: item.name,
                            type: item.type,
                            weight: Number(item.weight),
                            sets: Number(item.sets),
                            reps: Number(item.reps),
                            distance: Number(item.distance),
                            time: Number(item.time),
                            intensity: item.intensity,
                        }
                    })
                },
            });
            setWorkoutName('')
            setExerciseList([]);
        } catch (err) {
            console.error(err);
        }
    };

    const handleNameChange = (e) => {
        const { value } = e.target;
        setWorkoutName(value);
    };

    return (
        <>
            <div className='flexRowTop'>
                <div className='flexColumn'>

                    <h3>Add an exercise:</h3>
                    <StyledForm onSubmit={handleSubmitExercise}>
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
                                        placeholder="50 (kg's)"
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
                                        placeholder="5 (km's)"
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
                                        placeholder="45 (min)"
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
                </div>
                <div className='flexColumn'>
                    <h3>Exercise List:</h3>
                    <div className='exerciseContainer'>
                        {exerciseList.map((item) => (
                            <StyledCard>
                                <ul className='card' key={item.name}>
                                    <li>{item.name}</li>
                                </ul>
                            </StyledCard>
                        ))}
                    </div>
                    <StyledForm>
                        <div >
                            <label htmlFor="workoutName">Workout Name:</label>
                            <input
                                type="text"
                                name="workoutName"
                                placeholder='Sunday, Gym, Workout...'
                                onChange={handleNameChange}
                                value={workoutName}
                                required />
                        </div>
                        <button onClick={handleCreateWorkout} >Save Workout</button>
                    </StyledForm>
                </div>
            </div>
        </>
    )
}
