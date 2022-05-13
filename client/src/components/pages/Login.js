import React from 'react';

import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import { PageContainer } from '../styles/PageContainer.styled';

export default function Login() {
    return (
        <PageContainer>
            <div className='flexRow'>
                <SignupForm />
                <LoginForm />
            </div>
        </PageContainer>
    );
}
