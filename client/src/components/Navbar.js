import { StyledNavbar } from './styles/Navbar.styled';
import { StyledNavbarLink } from './styles/NavbarLink.styled';
import { StyledNavbarLinkActive } from './styles/NavbarLinkActive.styled';

export default function Navbar({ currentPage, handlePageChange }) {

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
        <StyledNavbar>
            <ul className='navbar'>
                {navbarPages.map((page) => (
                    currentPage === page.title ?
                    <StyledNavbarLinkActive>
                        <a href={page.link} onClick={() => handlePageChange(page.title)}>
                            {page.title}
                        </a>
                    </StyledNavbarLinkActive> : 
                    <StyledNavbarLink>
                        <a href={page.link} onClick={() => handlePageChange(page.title)}>
                            {page.title}
                        </a>
                    </StyledNavbarLink>
                ))}
            </ul>
        </StyledNavbar>
    );
}