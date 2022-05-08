import React from 'react';
import { StyledForm } from './styles/Form.styled';

export default function WorkoutForm() {

    return (
        <>
            <h3>Add an exercise to your workout:</h3>
            <StyledForm>
                <div>
                    <label for="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Gym, Running, Swimming...'
                        required />
                </div>
                <div>
                    <label for="name">Type:</label>
                    <select
                        type="text"
                        name="name"
                        required >
                            <option value="" disabled selected>Choose a type...</option>
                            <option value='strength'>Strength</option>
                            <option value='cardio'>Cardio</option>
                    </select>
                </div>
                <div>
                    <label for="name">Weight:</label>
                    <input
                        type="number"
                        name="name"
                        min="0"
                        max="500"
                        step="2.5"
                        placeholder='50kg...'
                        required />
                </div>
                <div>
                    <label for="name">Sets:</label>
                    <input
                        type="number"
                        name="name"
                        min="1"
                        max="10"
                        step="1"
                        placeholder='3...'
                        required />
                </div>
                <div>
                    <label for="name">Reps:</label>
                    <input
                        type="number"
                        name="name"
                        min="1"
                        max="10"
                        step="1"
                        placeholder='8...'
                        required />
                </div>
                <div>
                    <label for="name">Distance:</label>
                    <input
                        type="number"
                        name="name"
                        min="1"
                        max="1000"
                        step="1"
                        placeholder='5.4'
                        required />
                </div>
                <div>
                    <label for="name">Time:</label>
                    <input
                        type="text"
                        name="number"
                        min="1"
                        max="1440"
                        step="1"
                        placeholder='45min...'
                        required/>
                </div>
                <div>
                    <label for="name">Intensity:</label>
                    <select 
                        name="name"
                        placeholder='Slow, Medium, High...'
                        required >
                            <option value="" disabled selected>Choose an intensity...</option>
                            <option value='low'>Low</option>
                            <option value='moderate'>Moderate</option>
                            <option value='high'>High</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </StyledForm>
        </>
    )
}
