import React from 'react';

import Auth from '../../utils/auth';
import { HomeStyle } from '../styles/Home.styled';
import { StyledCard, CardInner } from '../styles/Card.styled';
import SummaryImg from '../../assets/images/summaryPage.png';

export default function Home() {
    return (
        <HomeStyle>
            <div className='homeContainer'>

                <StyledCard>
                    <CardInner>
                        <div className='catchPhrase'>
                            <p className='lessThinking'>" Less Thinking.</p>
                            <p className="moreTraining">More Training "</p>
                        </div>
                    </CardInner>
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
            <div className='homeContainer rightContainer'>
                <StyledCard>
                    <CardInner>
                        {!Auth.loggedIn() ? 
                        <p>Login or signup for free to access full benefits!</p>
                        :
                        <p>Enjoy the site!</p>
                        }
                    </CardInner>
                </StyledCard>
                <img src={SummaryImg} alt='Photo of app'/>
            </div>
        </HomeStyle>
    );
}
