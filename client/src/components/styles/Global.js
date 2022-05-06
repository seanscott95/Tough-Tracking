import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
  
    html {
        font-size: 10px;
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
        outline: none
    }
`;
export default GlobalStyles;