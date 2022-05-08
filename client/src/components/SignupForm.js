import React from 'react'

export default function SignupForm() {
    return (
        <>
            <h2>Sign up</h2>
            <form>
                <div>
                    <label for="name-signup">Name:</label>
                    <input type="text" id="name-signup" placeholder="Enter your name" required />
                </div>
                <div >
                    <label for="email-signup">Email:</label>
                    <input type="text" id="email-signup" placeholder="Enter your email" required />
                </div>
                <div>
                    <label for="password-signup">Password:</label>
                    <input type="password" id="password-signup"
                        placeholder="Password has to be longer than 8 characters" required />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </>
    )
}
