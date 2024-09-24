import styled, { css } from 'styled-components'
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const StyledSubheading = styled.h1`
    font-family: 'ArchivoNarrow', serif;
    padding: 0;
    margin: 0;
    font-size: ${S.fontSize(32)}vw;
    line-height: ${S.height(32.33)}vh;
    font-weight: 500;
    color: ${S.colour.secondaryDark};
    text-transform: uppercase;
    
    ${props => props.$mobileHidden && css`
        ${Media.md`
            display: none;
        `}
    `}

    ${Media.md`
        font-size: 20px;
        line-height: 26.94px;
        
        ${props => props.$large && css`
            font-size: 32px;
            line-height: 20px;
            font-weight: 500;
        `}
    `};
    
`

