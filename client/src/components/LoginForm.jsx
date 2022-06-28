import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { StyledCard, CardInner } from './styles/Card.styled';
import { FlexColumn } from '../components/styles/Flex.styled';
import { StyledLoginForm } from './styles/Form.styled';
import { Button } from './styles/Button.styled';

export default function LoginForm() {

    const [formState, setFormState] = useState({ email: '', password: '' });

    // Mutation for creating and deleting a workout in the mongo db
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // Sets the inputted values to the formState state variable
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Verifies your login credentials then sets a JWT auth token in local and resets the formState
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <FlexColumn>
                <StyledCard>
                    <CardInner>
                        <h2>Login</h2>
                    </CardInner>
                </StyledCard>

                <StyledLoginForm onSubmit={handleFormSubmit}>
                    <div>
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
                        <Button type="submit">Log In</Button>
                    </div>
                </StyledLoginForm>
                    <div>
                        {error && (
                            <div>{error.message}.</div>
                        )}
                    </div>
            </FlexColumn>
        </>
    )
};