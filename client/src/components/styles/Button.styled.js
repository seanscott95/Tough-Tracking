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
    box-shadow: rgba(0, 0, 0, .3) 0 5px 15px;
`

export const DeleteButton = styled(Button)`
    background: red;
`

export const SaveButton = styled(Button)`
    background: green;
`