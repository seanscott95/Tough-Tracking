import styled from "styled-components";

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin-bottom: 15px;

    li {
        display: flex;
        align-items: center;
        justify-content: start;
        padding-top: 5px;
    }

    p {
        margin-left: 25px;
    }

    li:last-child {
        padding-left: 3px;
    }

    li:last-child p {
        margin-left: 30px;
    }
`