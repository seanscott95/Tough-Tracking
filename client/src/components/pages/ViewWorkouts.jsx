import React from 'react';

import WorkoutReadOnly from '../WorkoutReadOnly';
import { PageContainer } from '../styles/PageContainer.styled';

export default function ViewWorkouts() {
    return (
        <PageContainer>
            <WorkoutReadOnly />
        </PageContainer>
    );
}
