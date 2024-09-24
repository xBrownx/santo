import { memo } from 'react';
import SlideCarousel from "../../molecules/slideCarousel/index.jsx";
import { Column } from "../../atoms/index.jsx";
import { carouselConst as CONST } from "./constants.jsx";

export const OverviewCarousel = memo(
    function OverviewCarousel() {
        const imgCarousel = CONST.imgCarousel;
        return (
            <Column $height={532} $mobileHeightUnset>
                <SlideCarousel images={imgCarousel} />
            </Column>
        );
    }
);
