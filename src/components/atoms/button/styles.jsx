import styled, {css} from "styled-components";
import {
    Style as S,

} from "../../util";


export const StyledButton = styled.button`
    transition: color 300ms;
    ${S.font.size(18)};
    ${S.borderRadius};
    ${S.margin.none};
    ${S.flex.centre};
    color: ${S.colour.secondary};
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: ${S.colour.secondary};
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;

    ${props => props.width && css`
        ${S.size.width(props.width)};
        ${S.margin.none};
        ${S.padding.none};
    `};

    ${props => props.height && css`
        ${S.size.height(props.height)};
    `};

    ${props => props.fontSize && css`
        ${S.font.size(props.fontSize)};
    `};

    ${props => props.square && css`
        ${S.square(props.square)};
    `};
    
    ${props => props.$secondary && css`
        color: white;
        border-color: white;
    `};
    
    ${props => props.$variantOne && css`
        color: black;
        border-color: white;
        background-color: white;
        transition: all 200ms ease-in-out;
    `};

    ${props => props.gap && css`
        ${S.gap.width(props.gap)};
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
        ${S.size.height(51)};
        color: ${S.colour.secondary};
        
        background: white;

    `}

`

