import React, { useState, useEffect } from 'react';

import Auth from '../../utils/auth';
import { HomeStyle } from '../styles/Home.styled';
import { StyledCard, CardInner } from '../styles/Card.styled';
import Logo from '../../assets/images/logo.png';

import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
    const [username, setUsername] = useState('');

    // Checks to see if user is logged in, if true sets username state variable to username
    // from the jwt token using the getProfile function from the auth file
    useEffect(() => {
        if (!Auth.loggedIn()) {
          return;
        }
        const user = Auth.getProfile();
        setUsername(user.data.username);;
      }, [username])

    const capFirstLetter = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    }

    return (
        <HomeStyle>
            <div>
                <StyledCard>
                    <CardInner>
                        <h2> <FontAwesomeIcon icon={faQuoteLeft} /> Less Thinking.</h2>
                        <h2>More Training. <FontAwesomeIcon icon={faQuoteRight} /></h2>
                    </CardInner>
                </StyledCard>

                <StyledCard as='ul'>
                    <CardInner >
                        <li>&rarr; Visualise and plan your workout ahead.</li>
                        <li>&rarr; Log Strength and Cardio workouts.</li>
                        <li>&rarr; Edit and delete past workouts.</li>
                    </CardInner>
                </StyledCard>
            </div>
            <div>
                <StyledCard>
                    <CardInner>
                        {!Auth.loggedIn() ?
                            <p>Login or signup for free to access full benefits!</p>
                            :
                            <p>{capFirstLetter(username)}, your body can do it, it's time to convince your mind!</p>
                        }
                    </CardInner>
                </StyledCard>
                <img src={Logo} alt='Logo' />
            </div>
        </HomeStyle>
    );
}
