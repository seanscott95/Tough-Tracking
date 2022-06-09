import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../utils/auth';
import { StyledNavbar } from './styles/Navbar.styled';

export default function Navbar() {

    // Handler for when logout button is clicked, deletes the JWT token stored in local
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const [currentPage, setCurrentPage] = useState('Home');

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
        <>
            <StyledNavbar>
                <ul>
                    <li className={currentPage === 'home' ? 'active' : ''}>
                        <NavLink to='/' onClick={() => setCurrentPage('Home')}>
                            Home
                        </NavLink>
                    </li>

                    {navbarPages.map((page) => (
                        Auth.loggedIn() ? (
                            <li key={page.link} className={currentPage === page.title ? 'active' : ''}>
                                <NavLink key={page.link} to={page.link} onClick={() => setCurrentPage(page.title)} >
                                    {page.title}
                                </NavLink>
                            </li>
                        ) : (
                            <li key={page.link}></li>
                        )
                    ))
                    }
                    <li className={currentPage === 'login' ? 'active' : ''}>
                        {Auth.loggedIn() ? (
                            <NavLink to='/' onClick={logout}>
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink to='/login' onClick={() => setCurrentPage('Login')}>
                                Login/Signup
                            </NavLink>
                        )}
                    </li>
                </ul>
            </StyledNavbar>
        </>
    );
}