import styled, { css } from "styled-components";
import { Style as S } from '../../util'


export const Background = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
`

export const Image = styled.img`
    width: ${props => S.width(props.$width)}vw;
    height: auto;
    object-fit: cover;
`

export const LegendSquare = styled.div`
   
    width: ${S.height(32)}vh;
    height: ${S.height(32)}vh;
    
    ${props => props.$primary && css`
        background-color: #618BD1
    `};
    
    ${props => props.$secondary && css`
        background-color: #2B2B2BCC;
    `};
`