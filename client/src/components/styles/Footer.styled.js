import styled from 'styled-components';

export const StyledFooter = styled.nav`
    
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    font-size: 12px;
    background: #1e2327;

    .footerList {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0px;
        padding: 0px;
    }

    .footerItem {
        padding: 10px 20px;
        margin-top: 5px;
        transition: transform .2s;
        color: white;
        list-style: none;
    }

    .footerItem:hover {
        transform: scale(1.4);
        color: grey;
        cursor: pointer;
    }

    .footerCaption {
        color: white;
        margin: 5px;
        margin-bottom: 10px;
    }
`;