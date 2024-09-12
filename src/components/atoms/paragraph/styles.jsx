import styled, { css } from 'styled-components'
import {Style as S} from '../../util'


export const StyledParagraph = styled.p`
    font-size: ${S.fontSize(18)};
    color: black;
    white-space: pre-wrap;
    padding: 0;
    margin: 0;
    ${props => props.$secondary && css`
        
    `};
    
    ${props => props.$opacity && css`
        opacity: ${props.$opacity};
    `};
    
    ${props => props.$fontSize && css`
        font-size: ${S.fontSize(props.$size)};
    `};
    
    ${props => props.$weight && css`
        font-weight: ${props.$weight};
    `}
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}
    `}
    
    ${props => props.$paddingRight && css`
        padding-right: ${S.width(props.$paddingRight)}
    `}
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${S.height(props.$paddingBottom)}
    `}
    
    ${props => props.$paddingLeft && css`
        padding-left: ${S.width(props.$paddingLeft)}
    `}
    
    ${props => props.$lineHeight && css`
        line-height: ${S.height(props.$lineHeight)}
    `};

`

