import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    list-style: none;
    background: #1e2327;
    margin: 0px;
    position: fixed;
    top: 0;
    min-width: 100%;
    z-index: 10;
    
    ul {
        display: flex;
        flex-direction: row;
        min-width: 100%;
        justify-content: space-around;
        padding: 10px;
    }

    li {
        margin: 5px;
        padding: 5px;
        transition: transform .3s;
        color: white;
    }

    li:hover {
        transform: scale(1.2);
    }

    .active {
        margin: 5px;
        padding: 5px;
        text-decoration: underline;
        text-transform: uppercase;
        transition: transform .2s;
    }

    .active:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 450px) {
        font-size: .8rem;
    }
`