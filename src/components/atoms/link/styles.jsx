import styled, { css } from 'styled-components';
import {Style as STYLE } from '../../util';
import { Media } from "../../util/Media.jsx";

export const StyledLink = styled.a`
    all: unset;
    text-transform: uppercase;
    font-size: ${STYLE.fontSize(20)}vw;
    color: black;

    &:hover {
        cursor: pointer;
    }
    
    ${Media.md`
        ${props => props.$mobileHidden && css`
            display: none;
        `} 
    `};
    
`
