import styled from 'styled-components';

export const NilContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 500px;
        height: auto;
    }

    @media screen and (max-width: 600px) {
        img {
            width: 300px;
            height: auto;
        }  
    }
    @media screen and (max-width: 370px) {
        img {
            width: 220px;
            height: auto;
        }  
    }
`