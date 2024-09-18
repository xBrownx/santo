import styled from 'styled-components';
import { Style as S } from '../../util'
export const Container = styled.div`
    width: ${S.width(300)}vw;
`

export const StyledImg = styled.img`
    width: ${S.height(128)}vh;
`

export const StyledParagraph = styled.p`
    font-family: 'ArchivoNarrow', serif;
    margin: 0;
    padding: 0;
    font-size: ${S.fontSize(20)}vw;
    color: #000;
    opacity: 0.5;
`
