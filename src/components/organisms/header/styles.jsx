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
    ${ S.padding.inlineBlock({inline: 32})};
    background: white;
    
    ${props => props.width && css`
        ${S.size.width(props.width)}
    `};
    
    ${props => props.height && css`
        ${S.size.height(props.height)}
    `};
`

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    ${S.gap.width(32)}
`

export const StyledLi = styled.li`
    color: #4160AE;
`