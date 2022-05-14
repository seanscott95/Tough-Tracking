import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { StyledForm } from './styles/Form.styled';

export default function SignupForm() {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

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
            <div>
                <h2>Sign up</h2>
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
            </div>
            {error && (
                <div>
                    {error.message}
                </div>
            )}
        </>
    )
}
