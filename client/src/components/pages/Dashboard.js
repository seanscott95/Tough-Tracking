import React from 'react';

import WorkoutCardSmall from '../WorkoutCardSmall';
import { PageContainer } from '../styles/PageContainer.styled';

export default function Dashboard() {
    return (
        <PageContainer>
            <WorkoutCardSmall />
        </PageContainer>
    );
}
