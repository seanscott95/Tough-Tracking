import styled from 'styled-components';

export const StyledFooter = styled.footer`
    
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    font-size: 12px;
    background: #1e2327;
    position: fixed;
    bottom: 0;
    min-width: 100%;
    z-index: 10;

    ul {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0px;
        padding: 0px;
        font-size: 15px;
    }

    li {
        padding: 10px 20px;
        margin-top: 5px;
        transition: transform .2s;
        color: white;
        list-style: none;
    }

    li:hover {
        transform: scale(1.4);
        color: grey;
        cursor: pointer;
    }

    p {
        color: white;
        margin: 5px;
        margin-bottom: 10px;
    }
`;