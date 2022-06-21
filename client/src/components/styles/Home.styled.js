import styled from 'styled-components';

export const HomeStyle = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    font-size: 20px;

    ul {
        font-size: 50px;
        font-weight: bold;
    }

    li span {
        margin-left: 50px;
    }

    div {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        justify-content: space-around;
        align-items: center;
    }

    p {
        padding: 10px;
    }

    q {
        width: 300px;
        font-weight: normal;
        font-style: italic;
        text-align: center;
    }

    img {
        width: 300px;
        height: 300px;
        margin-top: 20px;
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