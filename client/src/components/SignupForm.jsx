import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { StyledForm } from './styles/Form.styled';
import { StyledCard, CardInner } from './styles/Card.styled';
import { FlexColumn } from '../components/styles/Flex.styled';

export default function SignupForm() {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Mutations for creating and deleting a workout in the mongo db
    const [addUser, { error, data }] = useMutation(ADD_USER);

    // Sets the inputted values to the formState state variable
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Creates a new user with the form state variables value then sets a JWT auth
    // token in local and resets the formState
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

    };

    return (
        <>
            <FlexColumn>
                <StyledCard>
                    <CardInner>
                        <h2>Sign up</h2>
                    </CardInner>
                </StyledCard>
                <StyledForm onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formState.username}
                            onChange={handleChange}
                            required />
                    </div>
                    <div >
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={formState.email}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password has to be longer than 8 characters"
                            value={formState.password}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </StyledForm>
            </FlexColumn>
            {error && (
                <div>
                    {error.message}
                </div>
            )}
        </>
    )
}
