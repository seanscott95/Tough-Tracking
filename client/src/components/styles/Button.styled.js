import styled from "styled-components";

export const Button = styled.button`
    padding: 1px 5px;
    margin: 5px;
    background: #1e2327;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    font-size: 20px;
`

export const DeleteButton = styled(Button)`
    color: black;
    background: red;
`

export const SaveButton = styled(Button)`
    background: green;
`