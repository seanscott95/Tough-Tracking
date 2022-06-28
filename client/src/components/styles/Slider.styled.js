import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Slider = styled(Swiper)`
    height: fit-content;
    width: 300px;

    @media screen and (max-width: 367px) {
        width: 200px;
    }
`