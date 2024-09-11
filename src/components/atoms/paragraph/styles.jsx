import styled, { css } from 'styled-components'
import {Style as S} from '../../util'


export const StyledParagraph = styled.p`
    ${S.font.size(18)};
    color: black;
    white-space: pre-wrap;
    padding: 0;
    margin: 0;
    ${props => props.$secondary && css`
        
    `};
    
    ${props => props.opacity && css`
        opacity: ${props.opacity};
    `};
    
    ${props => props.size && css`
        ${S.font.size(props.size)};
    `};
    
    ${props => props.weight && css`
        font-weight: ${props.weight};
    `}
    
    ${props => props.padding && css`
        ${S.padding.trbl(props.padding)}
    `}
    
    ${props => props.lineHeight && css`
        ${S.font.lineHeight(props.lineHeight)}
    `};

`

