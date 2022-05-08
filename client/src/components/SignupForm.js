import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

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
        console.log(formState);

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
            {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
                <>
                    <h2>Sign up</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label for="username">Username:</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={formState.username}
                                onChange={handleChange}
                                required />
                        </div>
                        <div >
                            <label for="email">Email:</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                value={formState.email}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            <label for="password">Password:</label>
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
                    </form>
                </>
            )}
            {error && (
                <div>
                    {error.message}
                </div>
            )}
        </>
    )
}
