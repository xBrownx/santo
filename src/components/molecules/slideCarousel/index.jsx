import { memo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import * as Styled from './SlideCarousel.styled'
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const SlideCarousel = memo(
    function SlideCarousel({images}) {
        return (
            <Styled.Container>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={32}
                    slidesPerView={1.4}
                    navigation
                    centeredSlides={true}
                    loop={true}
                    pagination={{clickable: true}}
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-navigation-sides-offset": "16vw"
                    }}
                    onSwiper={(swiper) => {
                        swiper.slideNext();
                        setTimeout(() => {
                            swiper.slidePrev();
                        }, 100)
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
);


