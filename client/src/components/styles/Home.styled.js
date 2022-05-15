import styled from 'styled-components';

export const HomeStyle = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    font-size: 20px;

    .lessThinking {
        font-size: 50px;
        font-weight: bold;
    }

    .moreTraining {
        font-size: 50px;
        margin-left: 50px;
        font-weight: bold;
    }

    .dotpoints {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: bold;
    }

    .dotpoints div {
        display: flex;
    }

    .dotpoints p {
        padding: 20px;
        
    }

    img {
        width: 300px;
        height: 300px;
        margin-top: 20px;
    }

    .homeContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    @media screen and (max-width: 769px) {
        .homeContainer, .dotpoints {
            font-size: .9rem;
        }

        .lessThinking, .moreTraining {
            font-size: 2rem;
        }

        .dotpoints p {
            padding: 10px;
        }

        .rightContainer p {
            font-size: .9rem;
        }

        img {
            width: 200px;
            height: 200px;
        }
    }
    @media screen and (max-width: 610px) {
        flex-direction: column;
    }
    @media screen and (max-width: 481px) {
        img {
            display: none;
        }
    }
    @media screen and (max-width: 410px) {
        .moreTraining {
            margin: 0;
        }
    }
`