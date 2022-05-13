import styled from "styled-components";

export const DashboardStyle = styled.div`
    
    padding: 20px;
    font-size: 16px;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    .cardContainer {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .card {
        background: rgb(255, 255, 255, 0.6);
        border-radius: 5px;
        padding: 20px;
        margin: 10px;
        padding: 10px;
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
`