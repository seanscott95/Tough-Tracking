import React from 'react';

import WorkoutForm from '../WorkoutForm';
import { PageContainer } from '../styles/PageContainer.styled';

export default function CreateWorkout() {
    return (
        <PageContainer>
            <h2>Lets Begin!</h2>
            <WorkoutForm />
        </PageContainer>
    );
}
