import React from 'react';

import { HomeStyle } from '../styles/Home.styled';
import { StyledCard } from '../styles/Card.styled';
import Auth from '../../utils/auth';

export default function Home() {
    return (
        <HomeStyle>
            <div className='homeContainer'>

                <StyledCard>
                    <div className='card'>
                        <div className='catchPhrase'>
                            <p className='lessThinking'>" Less Thinking.</p>
                            <p className="moreTraining">More Training "</p>
                        </div>
                    </div>
                </StyledCard>


                <StyledCard>
                    <div className='dotpoints card'>
                        <div>
                            <p>&rarr;</p>
                            <p> Visualise and plan your workout ahead.</p>
                        </div>
                        <div>
                            <p>&rarr;</p>
                            <p> Log Strength and Cardio workouts.</p>
                        </div>
                        <div>
                            <p>&rarr;</p>
                            <p> Edit and delete past workouts.</p>
                        </div>
                    </div>
                </StyledCard>
            </div>
            <div className='homeContainer'>
                <StyledCard>
                    <div className='card'>
                        {!Auth.loggedIn() ? 
                        <p>Login or signup for free to access full benefits!</p>
                        :
                        <p>Enjoy the site!</p>
                        }
                    </div>
                </StyledCard>
                <p className="screenshot">Screenshot of app</p>
            </div>
        </HomeStyle>
    );
}
