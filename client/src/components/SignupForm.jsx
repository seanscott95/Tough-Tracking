import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { StyledCard, CardInner } from './styles/Card.styled';
import { FlexColumn } from '../components/styles/Flex.styled';
import { StyledLoginForm } from './styles/Form.styled';
import { Button } from './styles/Button.styled';

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
                <StyledLoginForm onSubmit={handleFormSubmit}>
                    <CardInner>
                        <h3>Sign Up</h3>
                    </CardInner>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formState.username}
                            onChange={handleChange}
                            required />
                    </div>
                    <div >
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <Button type="submit">Sign Up</Button>
                    </div>
                </StyledLoginForm>
                {error && (
                    <p>Password must be 8 or more characters.</p>
                )}
            </FlexColumn>
        </>
    )
}
