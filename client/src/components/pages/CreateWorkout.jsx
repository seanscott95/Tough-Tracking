import React from 'react';

import WorkoutForm from '../WorkoutForm';
import { PageContainer } from '../styles/PageContainer.styled';
import { StyledCard, CardInner } from '../styles/Card.styled';

export default function CreateWorkout() {
    return (
        <PageContainer>
            <StyledCard>
                <CardInner>
                    <WorkoutForm />
                </CardInner>
            </StyledCard>
        </PageContainer>
    );
}
