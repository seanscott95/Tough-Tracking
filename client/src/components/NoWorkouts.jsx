import React from 'react'
import { useNavigate } from "react-router-dom";

import { StyledCard, CardInner } from './styles/Card.styled';
import { Button } from './styles/Button.styled';
import QuoteImg from '../assets/images/quote.png';
import { NilContainer } from './styles/NilContainer.styled';

export default function NoWorkouts() {
    let navigate = useNavigate();

    const handleCreateClick = (e) => {
        e.preventDefault();
        navigate(`/createWorkout`);
    }
    return (
        <NilContainer>
            <StyledCard>
                <CardInner>
                    <p>No Workouts Yet.</p>
                    <p>Click the button to create a workout.</p>
                    <p>Lets Get Started!</p>
                    <Button onClick={handleCreateClick}>Create Workout</Button>
                </CardInner>
            </StyledCard>
            <img src={QuoteImg} />
        </NilContainer>
    )
}
