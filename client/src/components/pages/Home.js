import React from 'react';

import { HomeStyle } from '../styles/Home.styled'

export default function Home() {
    return (
        <HomeStyle>
            <div className='leftContainer'>
                <div className='catchPhrase'>
                    <p className='lessThinking'>" Less Thinking.</p>
                    <p className="moreTraining">More Training "</p>
                </div>
                <div className='dotpoints'>
                    <div>
                        <p>&rarr;</p>
                        <p> Visualise and plan your workout ahead.</p>
                    </div>
                    <div>
                        <p>&rarr;</p>
                        <p> Log Strength and cardio workouts.</p>
                    </div>
                    <div>
                        <p>&rarr;</p>
                        <p> Edit and delete past workouts.</p>
                    </div>
                </div>
            </div>
            <div className={'rightContainer'}>
                <p>Login or signup for free to access full benefits!</p>
                {/* P tag below will be a photo of finished product */}
                <p className="screenshot">Screenshot of app</p>
            </div>
        </HomeStyle>
    );
}
