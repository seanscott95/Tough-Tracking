import React from 'react'

export default function LoginForm() {
    return (
        <>
            <h2>Login</h2>
            <form>
                <div>
                    <label for="email-login">Email:</label>
                    <input type="text" id="email-login" placeholder="Enter your email" required />
                </div>
                <div>
                    <label for="password-login">Password:</label>
                    <input type="password" id="password-login"
                        placeholder="Your password should be longer than 5 characters" required />
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </>
    )
}
