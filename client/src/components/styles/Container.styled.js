import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    max-height: 100%;
    padding: 0 20px;
    margin: 0 auto;

    @media screen and (max-width: 390px) {
        padding: 0;
        margin: 0;
    }
`;