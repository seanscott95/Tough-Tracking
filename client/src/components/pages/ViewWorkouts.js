import React from 'react';

import WorkoutReadOnly from '../WorkoutReadOnly';
import { PageContainer } from '../styles/PageContainer.styled';

export default function ViewWorkouts() {
    return (
        <PageContainer>
            <h2>Your Workouts</h2>
            <p>Here's a detailed version of all your workouts in one place!</p>
            <WorkoutReadOnly />
        </PageContainer>
    );
}
