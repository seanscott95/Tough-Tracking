import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';

export default function WorkoutForm() {

    const [typeValue, setTypeValue] = useState('default');
    const [intensityValue, setIntensityValue] = useState('default');

    const typeHandleChange = (e) => {
        setTypeValue(e.target.value);
    }

    const intensityHandleChange = (e) => {
        setIntensityValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeValue, intensityValue)
    }
    
    return (
        <>
            <h3>Add an exercise to your workout:</h3>
            <StyledForm onSubmit={handleSubmit}>
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
                        onChange={typeHandleChange}
                        defaultValue={typeValue}
                        required >
                            <option value="default" disabled hidden>
                                Choose type...
                            </option>
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
                        onChange={intensityHandleChange}
                        defaultValue={intensityValue}
                        required >
                            <option value="default" disabled hidden>
                                Choose intensity...
                            </option>
                            <option value='low'>Low</option>
                            <option value='moderate'>Moderate</option>
                            <option value='high'>High</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </StyledForm>
        </>
    )
}
