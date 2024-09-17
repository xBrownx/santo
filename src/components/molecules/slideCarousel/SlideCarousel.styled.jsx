import styled, { css } from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Style as S } from '../../util'

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;


`

export const Slide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    //max-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    object-fit: scale-down;
    
`


export const SwiperImage = styled.img`
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `}
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `}
    
    object-fit: cover;
    
   
`