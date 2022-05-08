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
                        name="name" />
                </div>
                <div>
                    <label for="name">Type:</label>
                    <input
                        type="text"
                        name="name" />
                </div>
                <div>
                    <label for="name">Weight:</label>
                    <input
                        type="text"
                        name="name" />
                </div>
                <div>
                    <label for="name">Sets:</label>
                    <input
                        type="text"
                        name="name" />
                </div>
                <div>
                    <label for="name">Reps:</label>
                    <input
                        type="text"
                        name="name" />
                </div>
                <div>
                    <label for="name">Distance:</label>
                    <input
                        type="text"
                        name="name" />
                </div>
                <div>
                    <label for="name">Time:</label>
                    <input
                        type="text"
                        name="name" />
                </div>
                <div>
                    <label for="name">Intensity:</label>
                    <input
                        type="text"
                        name="name" />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </StyledForm>
        </>
    )
}
