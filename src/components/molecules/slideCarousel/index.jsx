import { memo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import * as Styled from './SlideCarousel.styled'
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useMobile } from "../../../hooks/useMobile.jsx";

function SlideCarousel({ images }) {
    const isMobile = useMobile()

    return (
        <Styled.Container>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={isMobile ? 16 : 32}
                slidesPerView={isMobile ? 1.2 : 1.4}
                navigation={!isMobile}
                centeredSlides={true}
                loop={!isMobile}
                pagination={{ clickable: true }}
                style={{
                    "--swiper-pagination-color": "#FFF",
                    "--swiper-navigation-sides-offset": "16vw"
                }}
                onSwiper={(swiper) => {
                    swiper.slideNext();
                    setTimeout(() => {
                        swiper.slidePrev();
                    }, 500)
                }}
            >
                {images.map((image, i) => {
                    return (
                        <Styled.Slide
                            key={i}
                            as={SwiperSlide}
                        >
                            <Styled.SwiperImage
                                src={image.src}
                                alt={image.alt}
                                $height={image.height}
                                $width={image.width}
                            />
                        </Styled.Slide>

                    );
                })}
            </Swiper>
        </Styled.Container>
    );
}

export default memo(SlideCarousel);


