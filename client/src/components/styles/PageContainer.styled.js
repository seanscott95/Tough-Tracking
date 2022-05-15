import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 20px;
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;

    @media screen and (max-width: 768px) {
        h2, button {
            font-size: 1rem;
        }
        .login {
            display: flex;
            flex-direction: column-reverse;
        }
    }
`