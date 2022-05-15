import React from 'react';

import WorkoutForm from '../WorkoutForm';
import { PageContainer } from '../styles/PageContainer.styled';
import { StyledCard } from '../styles/Card.styled';

export default function CreateWorkout() {
    return (
        <PageContainer>
            <StyledCard>
                <div className='card'>
                    <h2>Lets Begin!</h2>
                    <WorkoutForm />
                </div>
            </StyledCard>
        </PageContainer>
    );
}
