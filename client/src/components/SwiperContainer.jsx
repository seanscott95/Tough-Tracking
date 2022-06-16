import React from 'react'

import ExerciseReadOnly from './ExerciseReadOnly';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Slider, SliderItem } from './styles/Slider.styled';
import { StyledCard, CardInner } from './styles/Card.styled';

export default function SwiperContainer({ item }) {
    return (

        <Slider
            slidesPerView={'auto'}
            centeredSlides
            spaceBetween={2}
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
