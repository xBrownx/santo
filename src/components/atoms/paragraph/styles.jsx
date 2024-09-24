import styled, { css } from 'styled-components'
import {Style as S} from '../../util'
import { Media } from "../../util/Media.jsx";


export const StyledParagraph = styled.p`
    font-size: ${S.fontSize(20)};
    color: black;
    white-space: pre-wrap;
    padding: 0;
    margin: 0;
    font-family: 'ArchivoNarrow', serif;
    
    ${props => props.$secondary && css`
        color: white;
    `};
    
    ${props => props.$subheading && css`
        font-weight: 700;
        text-transform: uppercase;
    `};
    
    ${props => props.$opacity && css`
        opacity: ${props.$opacity};
    `};
    
    ${props => props.$fontSize && css`
        font-size: ${S.fontSize(props.$fontSize)}vw;
    `};
    
    ${props => props.$weight && css`
        font-weight: ${props.$weight};
    `}
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
    `}
    
    ${props => props.$paddingRight && css`
        padding-right: ${S.width(props.$paddingRight)}vw;
    `}
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${S.height(props.$paddingBottom)}vh;
    `}
    
    ${props => props.$paddingLeft && css`
        padding-left: ${S.width(props.$paddingLeft)}vw;
    `}
    
    ${props => props.$lineHeight && css`
        line-height: ${S.height(props.$lineHeight)}vh;
    `};

    ${Media.md`
        font-size: 16px;
    `};
    
`

