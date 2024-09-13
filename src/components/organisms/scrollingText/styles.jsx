import styled from "styled-components";

import { Style as S } from '../../util'
export const Container = styled.div`
    padding-top: ${S.height(150)}vh;
    padding-bottom: ${S.height(50)}vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    width: 100vw;
    background-color: white;
`


export const Heading = styled.h1`
    font-family: 'ArchivoNarrow', serif;
    color: ${S.colour.secondary};
    font-size: ${S.fontSize(300)}vw;
    line-height: ${S.height(300)}vh;
    font-weight: 400;
    opacity: 0.5;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
`
