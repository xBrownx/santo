import styled, { css } from "styled-components";
import {Style as S} from '../../util'


export const StyledHeading = styled.h1`
    padding: 0;
    margin: 0;
    
    ${props => props.$primary && css`
        color: #4160AE
    `};
    
    ${props => props.size && css`
        ${S.font.size(props.size)}
    `};
    
    ${props => props.weight && css`
        font-weight: ${props.weight};
    `}
    
    ${props => props.lineHeight && css`
        ${S.font.lineHeight(props.lineHeight)}
    `};
    
    
`
