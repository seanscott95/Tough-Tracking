import React from 'react';

import Auth from '../../utils/auth';
import { HomeStyle } from '../styles/Home.styled';
import { StyledCard, CardInner } from '../styles/Card.styled';
import Logo from '../../assets/images/logo.png';

export default function Home() {
    return (
        <HomeStyle>
            <div>
                <StyledCard>
                    <CardInner>
                        <ul>
                            <li>" Less Thinking.</li>
                            <li><span>More Training "</span></li>
                        </ul>
                    </CardInner>
                </StyledCard>

                <StyledCard>
                    <CardInner>
                        <p>&rarr; Visualise and plan your workout ahead.</p>
                        <p>&rarr; Log Strength and Cardio workouts.</p>
                        <p>&rarr; Edit and delete past workouts.</p>
                    </CardInner>
                </StyledCard>
            </div>
            <div>
                <StyledCard>
                    <CardInner>
                        {!Auth.loggedIn() ? 
                        <p>Login or signup for free to access full benefits!</p>
                        :
                        <p>Enjoy the site!</p>
                        }
                    </CardInner>
                </StyledCard>
                <img src={Logo} alt='Photo of app'/>
            </div>
        </HomeStyle>
    );
}
