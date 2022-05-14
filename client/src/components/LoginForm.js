import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { StyledForm } from './styles/Form.styled';
import Auth from '../utils/auth';

export default function LoginForm() {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

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
            <div>
                <h2>Login</h2>
                <StyledForm onSubmit={handleFormSubmit}>
                    <div>
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
                            placeholder="Your password should be longer than 5 characters"
                            value={formState.password}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <button type="submit">Log In</button>
                    </div>
                </StyledForm>
            </div>
            {error && (
                <div>
                    {error.message}
                </div>
            )}
        </>
    )
};