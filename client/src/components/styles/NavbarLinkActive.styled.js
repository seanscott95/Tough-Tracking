import styled from 'styled-components';

export const StyledNavbarLinkActive = styled.li`
    border: 3px solid rgba(54, 53, 53, 0.8);
    padding: 20px;
    margin: 20px;
    font-size: 30px;
    text-decoration: underline;
    text-transform: uppercase;
    transition: transform .2s;

    &:hover {
        transform: scale(1.2);
    }
`