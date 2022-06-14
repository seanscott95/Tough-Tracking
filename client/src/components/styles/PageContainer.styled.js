import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 20px;
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;

    .editContainer {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
    }

    @media screen and (max-width: 819px) {
        .createContainer, .editContainer {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (max-width: 776px) {
        * {
            font-size: 1rem;
        }
        
    }

    @media screen and (max-width: 768px) {
        .editContainer {
            width: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`