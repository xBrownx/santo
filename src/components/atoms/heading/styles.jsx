import styled, { css } from "styled-components";
import { Style as S } from '../../util'
import { Media } from '../../util/Media'

export const StyledHeading = styled.h1`
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'ArchivoNarrow', serif;

    ${props => props.$secondary && css`
        color: ${S.colour.secondaryDark};
    `};

    ${props => props.$fontSize && css`
        font-size: ${S.fontSize(props.$fontSize)}vw;
    `};

    ${props => props.$weight && css`
        font-weight: ${props.$weight};
    `}

    ${props => props.$lineHeight && css`
        line-height: ${S.height(props.$lineHeight)}vh;
    `};


    ${Media.md`
        font-size: 48px;
        line-height: 64.66px !important;
    `};

`
