import React from 'react';

import WorkoutReadOnly from '../WorkoutReadOnly';
import { WorkoutPagesContainer } from '../styles/WorkoutPagesContainer.styled';

export default function ViewWorkouts() {
    return (
        <WorkoutPagesContainer>
            <h2>Your Workouts</h2>
            <p>Here's a detailed version of all your workouts in one place!</p>
            <WorkoutReadOnly />
        </WorkoutPagesContainer>
    );
}
