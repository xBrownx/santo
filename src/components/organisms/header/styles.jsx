import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-inline: ${S.width(32)};
    background: white;
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)};
    `};
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)};
    `};
`

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: ${S.width(32)}
`

export const StyledLi = styled.li`
    color: ${S.colour.secondary};
`