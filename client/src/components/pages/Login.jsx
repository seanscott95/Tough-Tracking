import React from 'react';

import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import { PageContainer } from '../styles/PageContainer.styled';
import { FlexTop } from '../styles/Flex.styled';

export default function Login() {
    return (
        <PageContainer>
            <FlexTop>
                <SignupForm />
                <LoginForm />
            </FlexTop>
        </PageContainer>
    );
}
