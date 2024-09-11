import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    ${props => props.$padding && css`
        ${S.padding.inlineBlock({inline: 160, block: 72})};
    `}
`

export const Pane = styled.div`
    flex: 1;
    align-items: center;
`