import styled from "styled-components";

import { Style as S } from '../../util'
export const Container = styled.div`
    ${S.size.height(500)};
    ${S.size.minHeight(500)};
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    width: 100vw;

`


export const Heading = styled.h1`
    color: ${S.colour.secondary};
    ${S.font.size(300)};
    ${S.font.lineHeight(300)};
    font-weight: 400;
    opacity: 0.5;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    
`
