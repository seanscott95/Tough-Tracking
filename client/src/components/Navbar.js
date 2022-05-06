// import React from 'react';
import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';

import { StyledNavbar } from './styles/Navbar.styled';

export default function Navbar() {

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
        {
            title: 'Login / Signup',
            link: '/login'  
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
                </ul>
            </StyledNavbar>
        </>
    );
}