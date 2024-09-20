import styled from "styled-components";
import { Style as S } from '../../util'
export const ArrowContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${S.width(32)}vw;
    padding-bottom: ${S.height(28)}vh;
    svg {
        transform: rotate(180deg);
    }
`