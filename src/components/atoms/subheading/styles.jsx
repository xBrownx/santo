import styled, { css } from 'styled-components'
import { Style as S } from '../../util'

export const StyledSubheading = styled.h1`
    padding: 0;
    margin: 0;
    font-size: ${S.fontSize(24)}vw;
    font-weight: 700;
    color: ${S.colour.secondaryDark};

    ${props => props.$underline && css`
        text-decoration: underline;
    `}
`

