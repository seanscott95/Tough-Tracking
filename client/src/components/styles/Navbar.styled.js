import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    list-style: none;
    background: #1e2327;
    margin: 0px;
    position: fixed;
    top: 0;
    min-width: 100%;
    
    .navbarList {
        display: flex;
        flex-direction: row;
    }

    .navbarLink {
        padding: 10px;
        margin: 10px;
        transition: transform .3s;
        color: white;
    }

    .navbarLink:hover {
        transform: scale(1.2);
    }

    .navbarLinkActive {
        padding: 10px;
        margin: 10px;
        font-size: 20px;
        text-decoration: underline;
        text-transform: uppercase;
        transition: transform .2s;
    }

    .navbarLinkActive:hover {
        transform: scale(1.1);
    }
`