import styled from 'styled-components';
import { Style as S } from '../../util';

export const Container = styled.div`
    background-color: ${S.colour.secondary};
`

export const LeftTitle = styled.h2`
    padding: 0;
    margin: 0;
    font-size: ${S.fontSize(32)}vw;
    line-height: ${S.height(32)}vh;
    font-family: 'ArchivoNarrow', serif;
`

export const LeftSubtitle = styled.p`
    padding: 0;
    margin: 0;
    font-size: ${S.fontSize(14)}vw;
    line-height: ${S.height(18.86)}vh;
    font-family: 'ArchivoNarrow', serif;
`

export const Image = styled.img`
    width: ${S.width(122)}vw;
    height: ${S.height(56)}vh;
`