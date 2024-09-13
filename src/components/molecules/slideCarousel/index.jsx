import { memo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import * as Styled from './SlideCarousel.styled'
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const SlideCarousel = memo(
    function SlideCarousel({images, rounded}) {
        return (
            <Styled.Container>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={32}
                    slidesPerView={2}
                    navigation
                    pagination={{clickable: true}}
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-navigation-color": "#FFF",
                    }}
                >
                    {images.map((image, i) => {
                        return (
                            <Styled.Slide
                                as={SwiperSlide}
                                key={i}
                            >
                                <SwiperImg image={image} rounded={rounded} />
                            </Styled.Slide>

                        );
                    })}
                </Swiper>
            </Styled.Container>
        );
    }
);

const SwiperImg = memo(
    function SwiperImg({image}) {
        return (
            <Styled.SwiperImage
                src={image}
                alt={"no image"}
            />
        );
    }
);


