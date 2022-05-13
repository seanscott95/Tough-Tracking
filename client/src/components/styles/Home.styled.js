import styled from 'styled-components';

export const HomeStyle = styled.div`
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    font-size: 20px;

    .lessThinking {
        font-size: 30px;
    }

    .moreTraining {
        font-size: 30px;
        margin-left: 50px;
    }

    .catchPhrase {
        padding-bottom: 50px;
    }

    .dotpoints {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .dotpoints div {
        display: flex;
    }

    .dotpoints p {
        padding: 20px;
        
    }

    .dotpoints p span {
        font-size: 30px;
        margin-right: 20px;
    }

    .screenshot {
        width: 225px;
        height: 225px;
        background-color: black;
        margin-top: 20px;
    }

    .rightContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`