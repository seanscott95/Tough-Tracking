import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// import React, { useState } from 'react';

import { StyledNavbar } from './styles/Navbar.styled';
import { StyledNavbarLink } from './styles/NavbarLink.styled';
import { StyledNavbarLinkActive } from './styles/NavbarLinkActive.styled';

export default function Navbar() {

    const navbarPages = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'CreateWorkout',
            link: '/createWorkout'
        },
        {
            title: 'EditWorkout',
            link: '/editWorkout'
        },
        {
            title: 'SingleWorkout',
            link: '/singleWorkout'
        },
    ];

    return (
        <div>
            <ul className='navbar'>
                {navbarPages.map((page) => (
                    
                        <NavLink key={page.link} to={page.link} >
                            {page.title}
                        </NavLink>
                //    page.title === page.title ?
                //     <StyledNavbarLinkActive >
                //     </StyledNavbarLinkActive> : 
                //     <StyledNavbarLink>
                //         <Link to={page.link} onClick={() => handlePageChange(page.title)}>
                //             {page.title}
                //         </Link>
                //     </StyledNavbarLink>
                ))}
            </ul>
        </div>
    );
}