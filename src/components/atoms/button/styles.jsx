import styled, {css} from "styled-components";
import { Style as S } from "../../util";


export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: ${S.fontSize(20)}vw;
    font-family: 'ArchivoNarrow', serif;
    color: ${S.colour.secondary};
    margin: 0;
    padding: 0.5em 1.5em;
    
    
    background: transparent;
    border-color: ${S.colour.secondary};
    border-width: 1px;
    border-style: solid;
    transition: color 300ms;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;
    
    ${props => props.$width && css`
        width: ${S.width(props.width)}vw;
        padding: 0;
    `};

    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};

    ${props => props.$fontSize && css`
        font-size: ${S.fontSize(props.$fontSize)}vw;
    `};
    
    ${props => props.$secondary && css`
        color: white;
        border-color: white;
    `};
    
    ${props => props.$variantOne && css`
        background-color: white;
        border-color: white;
        font-size: ${S.fontSize(20)}vw;
    `};
    
    ${props => props.$gap && css`
        gap: ${S.width(props.$gap)}vw;
    `};
    
    ${props => props.$fillParent && css`
        width: 100%;
    `};
    
    ${props => props.$square && css`
        width: 150px;
        height: 150px;
    `};
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    }

    &::after {
        content: "";
        background: ${S.colour.secondary};
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }

    ${props => props.$variant && css`
        &::after,  &:hover::after {
            all: unset;
        }
        
        &:hover {
            cursor: pointer;
            color: black;
        }

        padding: 0;
        margin: 0;
        width: 100%;
        color: ${S.colour.secondary};
        
        background: white;

    `}

`

