import styled from "styled-components";
import { Style as S } from '../../util'
import { Media } from '../../util/Media.jsx'
export const ArrowContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${S.width(32)}vw;
    padding-bottom: ${S.height(28)}vh;
    svg {
        transform: rotate(180deg);
    }
    
    ${Media.md`
        display: flex;
        justify-content: center;
        width: 100%;
        right: unset;
    `};
    
    
`