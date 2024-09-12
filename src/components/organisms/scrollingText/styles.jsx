import styled from "styled-components";

import { Style as S } from '../../util'
export const Container = styled.div`
    height: ${S.height(500)};
    min-height: ${S.height(500)};
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    width: 100vw;

`


export const Heading = styled.h1`
    color: ${S.colour.secondary};
    font-size: ${S.fontSize(300)};
    line-height: ${S.height(300)};
    font-weight: 400;
    opacity: 0.5;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    
`
