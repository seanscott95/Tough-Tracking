import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
  
    html {
        font-family: 'Roboto Mono';
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: white;
    }

    img, svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    button {
        padding: 1px 5px;
        margin: 5px;
        background: #1e2327;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        outline: none;
        cursor: pointer;
        font-size: 20px;
    }

    input, select {
        width: 100%;
        line-height: 1.5;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 1px 5px;
        margin: 5px 0px;
        font-size: 15px;
        color: black;
    }

    label {
        color: black;
    }
`;
export default GlobalStyles;