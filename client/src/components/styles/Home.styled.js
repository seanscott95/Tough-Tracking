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

    .screenshot {
        width: 225px;
        height: 225px;
        background-color: black;
        margin-top: 20px;
    }

    .homeContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`