import React from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../utils/auth';
import { StyledNavbar } from './styles/Navbar.styled';

import Logo from '../assets/images/logo.png';

export default function Navbar() {

    // Handler for when logout button is clicked, deletes the JWT token stored in local
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const navbarPages = [
        {
            title: 'Dashboard',
            link: '/dashboard',
        },
        {
            title: 'Create Workout',
            link: '/createWorkout',
        },
        {
            title: 'View Workouts',
            link: '/viewWorkouts',
        },
    ];

    return (
        <StyledNavbar>
            <ul>
                <li>
                    <NavLink to='/'>
                        <img src={Logo} />
                    </NavLink>
                </li>

                {navbarPages.map((page) => (
                    Auth.loggedIn() ? (
                        <li key={page.link}>
                            <NavLink key={page.link} to={page.link} activeclassname='active'>
                                {page.title}
                            </NavLink>
                        </li>
                    ) : (
                        <li key={page.link}></li>
                    )
                ))
                }
                <li >
                    {Auth.loggedIn() ? (
                        <NavLink to='/' activeclassname='active' onClick={logout}>
                            Logout
                        </NavLink>
                    ) : (
                        <NavLink to='/login' activeclassname='active'>
                            Login/Signup
                        </NavLink>
                    )}
                </li>
            </ul>
        </StyledNavbar>
    );
}