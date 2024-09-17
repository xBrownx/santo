import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${S.width(8)}vw;
    justify-content: center;
    align-items: center;
    
    svg {
        height: ${S.height(20)}vh;
        width: ${S.height(20)}vh;
    }
`
