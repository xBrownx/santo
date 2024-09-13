import styled, { css } from "styled-components";
import { Style as S } from '../../util'

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
`

export const Wrapper = styled.div`
    position: absolute;

    height: fit-content;

    ${props => props.$width && css`
        width: ${S.width(props.$width + 1)}%;
    `};

    ${props => props.$height && css`
        height: ${S.height(props.$height)}%;
    `};

    ${props => props.$yPos && css`
        top: ${S.height(props.$yPos)}%;
    `};

    ${props => props.$xPos && css`
        left: ${S.width(props.$xPos - 1)}%;
    `};
    mix-blend-mode: hard-light;

    svg {

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

export const VectorWrapper = styled.div`
    
    
`