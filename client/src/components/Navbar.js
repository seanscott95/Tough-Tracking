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
            link: '/'
        },
        {
            title: 'Dashboard',
            link: '/dashboard'
        },
        {
            title: 'Create Workout',
            link: '/createWorkout'
        },
        {
            title: 'View Workouts',
            link: '/viewWorkout'
        },
    ];

    return (
        <>
            <StyledNavbar>
                <ul className='navbarList'>
                    {navbarPages.map((page) => (
                        <li key={page.link} className={currentPage === page.title ? 'navbarLinkActive' : 'navbarLink'}>
                            <NavLink key={page.link} to={page.link} onClick={() => setCurrentPage(page.title)} >
                                {page.title}
                            </NavLink>
                        </li>
                    ))}
                    <li className={currentPage === 'login' ? 'navbarLinkActive' : 'navbarLink'}>
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