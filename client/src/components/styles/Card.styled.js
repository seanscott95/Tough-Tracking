import styled from "styled-components";

export const StyledCard = styled.div`
    margin: 10px;
    background: rgb(255, 255, 255, 0.6);
    border-radius: 10px;
    border: 1px solid black;
    width: fit-content;
    color: white;

    .card {
        background: rgb(30, 35, 39, .9);
        border-radius: 5px;
        padding: 20px;
        margin: 5px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .cardInner {
        background: rgb(30, 35, 39, .9);
        border-radius: 5px;
        padding: 20px;
        margin: 5px;
        padding: 10px;
        border: 1px solid black;
        width: fit-content;
    }

`