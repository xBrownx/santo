import styled, { css } from 'styled-components'
import { Style as S } from '../../util'

export const StyledSubheading = styled.h1`
    font-family: ArchivoNarrow, serif;
    padding: 0;
    margin: 0;
    font-size: ${S.fontSize(24)}vw;
    line-height: ${S.height(32.33)}vh;
    font-weight: 700;
    color: ${S.colour.secondaryDark};
    text-transform: uppercase;

    ${props => props.$underline && css`
        text-decoration: underline;
    `}
`

