import styled from 'styled-components';

export const StyledForm = styled.form`
    
    background: rgb(255, 255, 255, 0.6);
    border-radius: 5px;
    font-size: 12px;
    padding: 5px;
    margin: 5px;
    
    input, select {
        width: 100%;
        line-height: 1.5;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 2px;
        margin: 5px 0px;
        font-size: 12px;
    }

    select {
        opacity: 70%;
    }

    button {
        padding: 1px 5px;
        margin: 5px 0px;
        background: #1e2327;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }
`;
