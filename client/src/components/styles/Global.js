import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
  
    html {
        font-family: 'Calibri';
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    ul {
        list-style: none;
    }

    ol {
        color: black;
        counter-reset: li; /* Initiates a counter */
        margin-left: 0;
        padding-left: 0;
    }

    ol > li {
        position: relative;
        margin: 0 0 6px 2em;
        padding: 4px 8px;
        list-style: none;
        background: #f6f6f6;
    }

    ol > li:before {
        content: counter(li); /* Displays the counter as content */
        counter-increment: li; /* Increments the counter by 1 for each li */
        position: absolute;
        top: 0px;
        left: -2em;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 2em;
        height: 1.6em;
        margin-right: 8px;
        padding: 4px;
        border-right: 2px solid black;
        color: #fff;
        background: #666;
        font-weight: bold;
        font-family: "Helvetica Neue", Arial, sans-serif;
        text-align: center;
    }
    
    li ol,
    li ul {
        margin-top:6px;
    }

    ol ol li:last-child {
        margin-bottom:0;
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