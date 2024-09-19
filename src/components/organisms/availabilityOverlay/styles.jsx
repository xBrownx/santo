import styled, { css } from "styled-components";
import { Style as S } from '../../util'


export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
`

export const Wrapper = styled.div`
    ${props => props.$active && css`
        z-index: -1;
    `}
    
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

    ${props => props.$hover && props.$active && css`
        z-index: 1;
    `}
    

    svg {
        z-index: 0;
        width: 100%;
        height: 100%;
        

        ${props => props.$active && css`
            opacity: 0;
            transition: opacity 200ms;
            transition-timing-function: linear;
        `}

        ${props => props.$hover && props.$active && css`
            opacity: 1;
        `}
    }
`

export const ModalWrapper = styled.div`
    z-index: -1;
    position: absolute;
    width: 233px;
    height: 218px;
    transform: translateY(${props => S.height(props.$yOffset)}vh);
    
    ${props => props.$isUp && css`
        transform: translateY(-${props =>
                props.$height - 25}px);
    `};
    
    transition: all 400ms ease-in-out;
    opacity: 0;
    ${props => props.$yPos && css`
        top: ${S.customHeight(props.$yPos, 855)}%;
    `};

    ${props => props.$xPos && css`
        left: ${S.width(props.$xPos)}%;
    `};

    ${props => props.$hover && css`
        opacity: 1;
        z-index: 2;
    `}

    &:hover {
        opacity: 1;
        z-index: 2;
    }
`

export const ButtonWrapper = styled.div`
    position: absolute;
    background-colour: blue;
    opacity: 0.5; 
    width: 50px;
    height: 30px;
    &:hover {
        cursor: pointer;
    }
`

export const HoverWrapper = styled.div`
    position: absolute;
    z-index: 10000;
    height: 50px;
    width: 90%;
    background-color: #747bff;
    opacity: 0.0;
    
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
