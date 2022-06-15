import React from 'react'
import { CardInner } from '../components/styles/Card.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPersonRunning, faT } from '@fortawesome/free-solid-svg-icons';

import { IconContainer } from './styles/FontIcon.styled';

export default function ExerciseReadOnly({ exercises }) {
    return (
        <CardInner as="li">
            <ul>
                {exercises.type === 'Strength' ?
                    <ol>
                        <IconContainer>
                            <li>
                                <FontAwesomeIcon icon={faT} />
                                <FontAwesomeIcon icon={faT} />
                                <p>{exercises.name}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDumbbell} />
                                <p>Strength</p>
                            </li>
                        </IconContainer>
                        <li>{`${exercises.weight} kg's`}</li>
                        <li>{`${exercises.sets} sets`}</li>
                        <li>{`${exercises.reps} reps`}</li>
                    </ol>
                    : ''}
                {exercises.type === 'Cardio' ?
                    <ol>
                        <IconContainer>
                            <li>
                                <FontAwesomeIcon icon={faT} />
                                <FontAwesomeIcon icon={faT} />
                                <p>{exercises.name}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPersonRunning} />
                                <p>Cardio</p>
                            </li>
                        </IconContainer>
                        <li>{`${exercises.distance} km's`}</li>
                        <li>{`${exercises.time} min`}</li>
                        <li>{exercises.intensity}</li>
                    </ol>
                    : ''}
            </ul>
        </CardInner>
    )
}
