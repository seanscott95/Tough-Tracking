import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    font-size: 20px;
    background: #1e2327;
    margin: 0px;
    position: fixed;
    top: 0;
    min-width: 100%;
    z-index: 10;

    img {
        height: 50px;
        width: auto;
    }

    ul:first-child {
        margin: 0px;
        padding: 0px;
    }
    
    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
        text-align: center;
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

    a.active {
        text-decoration: underline;
        text-transform: uppercase;
        transition: transform .2s;
    }

    a.active:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 490px) {
        font-size: .8rem;
    }
    @media screen and (max-width: 370px) {
        li {
            margin: 5px 0;
            font-size: .7rem;
        }
        img {
            height: 40px;
            width: auto;
        }
        a.active:hover > img {
            transform: scale(.8);
        }
    }
    @media screen and (max-width: 300px) {
        li {
            padding: 5px 2px;
        }
    }
`