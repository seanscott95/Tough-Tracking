import React from 'react'

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
        console.log(formState);
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
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
                <>
                    <h2>Login</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>
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
                                placeholder="Your password should be longer than 5 characters"
                                value={formState.password}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            <button type="submit">Log In</button>
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
};