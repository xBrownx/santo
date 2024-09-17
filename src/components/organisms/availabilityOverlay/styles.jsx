import styled, { css } from "styled-components";
import { Style as S } from '../../util'


export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
`

export const Wrapper = styled.div`
    z-index: -1;
    position: absolute;
    height: fit-content;
    ${props => props.$width && css`
        width: ${S.width(props.$width)}%;
    `};

    ${props => props.$height && css`
        height: ${S.height(props.$height)}%;
    `};

    ${props => props.$yPos && css`
        top: ${S.customHeight(props.$yPos, 855)}%;
    `};

    ${props => props.$xPos && css`
        left: ${S.width(props.$xPos)}%;
    `};

    mix-blend-mode: hard-light;

    ${props => props.$hover && css`
            z-index: 1;
    `}
    

    svg {
        z-index: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 200ms;
        transition-timing-function: linear;

        ${props => props.$hover && css`
            opacity: 1;
        `}

    }

`

export const ModalWrapper = styled.div`
    position: absolute;
    width: 233px;
    height: 218px;
    transform: translateY(-218px);

    svg {
        width: 100%;
        height: 100%;
        transition: opacity 200ms;
        transition-timing-function: linear;
    }
`

export const HoverWrapper = styled.div`
    position: absolute;
    z-index: 10000;
    height: 50px;
    width: 90%;
    background-color: #747bff;
    opacity: 0.50;
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `};
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};
    
    ${props => props.$yPos && css`
        top: ${S.customHeight(props.$yPos, 855)}%;
    `};

    ${props => props.$xPos && css`
        left: ${S.width(props.$xPos)}%;
    `};

`