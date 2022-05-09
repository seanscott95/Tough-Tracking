import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../utils/auth';
import { StyledNavbar } from './styles/Navbar.styled';

export default function Navbar() {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const [currentPage, setCurrentPage] = useState('Home');

    const navbarPages = [
        {
            title: 'Home',
            link: '/',
            show: true,
        },
        {
            title: 'Dashboard',
            link: '/dashboard',
            show: false
        },
        {
            title: 'Create Workout',
            link: '/createWorkout',
            show: false
        },
        {
            title: 'View Workouts',
            link: '/viewWorkouts',
            show: false
        },
    ];

    return (
        <>
            <StyledNavbar>
                <ul className='navbarList'>
                    {navbarPages.map((page) => (
                        Auth.loggedIn() === !page.show ? (
                            <li key={page.link} className={currentPage === page.title ? 'navbarLinkActive' : 'navbarLink'}>
                                <NavLink key={page.link} to={page.link} onClick={() => setCurrentPage(page.title)} >
                                    {page.title}
                                </NavLink>
                            </li>
                            ) : (
                                <li key={page.link}></li>
                            )
                        ))
                    }
                    <li key='login' className={currentPage === 'login' ? 'navbarLinkActive' : 'navbarLink'}>
                        {Auth.loggedIn() ? (
                            <NavLink to='/' onClick={logout}>
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink key='login' to="/login" onClick={() => setCurrentPage('login')}>
                                Login/Signup
                            </NavLink>
                        )}
                    </li>
                </ul>
            </StyledNavbar>
        </>
    );
}