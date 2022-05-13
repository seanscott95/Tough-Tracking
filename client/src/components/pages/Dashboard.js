import React from 'react';

import WorkoutCardSmall from '../WorkoutCardSmall';
import { WorkoutPagesContainer } from '../styles/WorkoutPagesContainer.styled';

export default function Dashboard() {
    return (
        <WorkoutPagesContainer>
            <WorkoutCardSmall />
        </WorkoutPagesContainer>
    );
}
