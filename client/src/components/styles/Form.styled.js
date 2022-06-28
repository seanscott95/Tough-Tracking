import styled from 'styled-components';

export const StyledForm = styled.form`
    background: rgb(255, 255, 255, 0.6);
    border-radius: 5px;
    font-size: 20px;
    padding: 5px;
    margin: 5px;
    border: 3px solid rgb(30, 35, 39, .9);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledLoginForm = styled(StyledForm)`
    min-height: 240px;
    min-width: 300px;

    @media screen and (max-width: 439px) {
        min-height: 200px;
        min-width: 200px;
        font-size: 1rem;
    }
`;
