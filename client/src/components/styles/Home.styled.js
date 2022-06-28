import styled from 'styled-components';

export const HomeStyle = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    font-size: 20px;

    h2 {
        font-size: 50px;
        font-weight: bold;
    }

    div {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        justify-content: space-around;
        align-items: center;
    }

    ul {
        text-decoration: none;
        align-items: start;
    }

    li {
        padding: 10px;
    }

    p {
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

    @media screen and (max-width: 869px) {
        p {
            font: 1rem;
            width: 250px;
        }
        h2 {
            font-size: 2.5rem;
        }
        li {
            font-size: 1.1rem;
            padding: 5px;
        }
        img {
            width: 250px;
            height: 250px;
        }
    }

    @media screen and (max-width: 757px) {
        p {
            font: 1rem;
            width: 200px;
        }
        h2 {
            font-size: 2rem;
        }
        li {
            font-size: 1rem;
            padding: 5px;
        }
        img {
            width: 200px;
            height: 200px;
        }
    }

    @media screen and (max-width: 655px) {
        flex-direction: column;
        div {
            flex-direction: column-reverse;
        }
        div > div {
            flex-direction: column;
        }
        img {
            margin-bottom: 20px;
        }
        div {
            min-width: 300px;
        }
        ul {
            display: none;
        }
    }

    @media screen and (max-width: 356px) {
        h2 {
            width: 200px;
            text-align: center;
            font-size: 1.5rem;
        }
        div {
            min-width: 200px;
            font-size: 1rem;
        }
        ul {
            display: none;
        }
    }
`