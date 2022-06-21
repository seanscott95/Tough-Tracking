import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

import Auth from '../../utils/auth';
import { HomeStyle } from '../styles/Home.styled';
import { StyledCard, CardInner } from '../styles/Card.styled';
import Logo from '../../assets/images/logo.png';

export default function Home() {
    const { loading, error, data } = useQuery(QUERY_USER);
    const username = data?.myUser.username || 'Mate';
    
    const capFirstLetter = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    } 

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
                        <q>{capFirstLetter(username)}, your body can do it, it's time to convince your mind!</q>
                        }
                    </CardInner>
                </StyledCard>
                <img src={Logo} alt='Logo'/>
            </div>
        </HomeStyle>
    );
}
