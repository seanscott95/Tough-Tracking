import React from 'react';

import WorkoutForm from '../WorkoutForm';
import { WorkoutPagesContainer } from '../styles/WorkoutPagesContainer.styled';

export default function CreateWorkout() {
    return (
        <WorkoutPagesContainer>
            <h2>Lets Begin!</h2>
            <WorkoutForm />
        </WorkoutPagesContainer>
    );
}
