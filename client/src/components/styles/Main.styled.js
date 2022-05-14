import styled from 'styled-components';

import backgroundImg from '../../assets/images/barbellLift.png';

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 59px;
    margin-bottom: 79px;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: calc(100vh - 138px);
`