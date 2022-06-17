import React from 'react'

import ExerciseReadOnly from './ExerciseReadOnly';

import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Slider } from './styles/Slider.styled';
import { StyledCard } from './styles/Card.styled';

export default function SwiperContainer({ item }) {
    return (

        <Slider
            slidesPerView={1.6}
            centeredSlides
            spaceBetween={30}
        >
            {item.exercises.map((exercises) => (
                <SwiperSlide>
                    <StyledCard>
                        <ExerciseReadOnly exercises={exercises} />
                    </StyledCard>
                </SwiperSlide>
            ))}
        </Slider>

    )
}
