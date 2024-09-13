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
    padding-inline: ${S.width(32)}vw;
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
    gap: ${S.width(32)}vw;
`

export const StyledLi = styled.li`
    color: ${S.colour.secondaryDark};
    opacity: 0.8;
    font-size: ${S.fontSize(20)}vw;
    font-weight: 500;
`

export const LeftTitle = styled.h2`
    padding: 0;
    margin: 0;
    font-size: ${S.fontSize(32)}vw;
    line-height: ${S.height(32)}vh;
    font-family: 'ArchivoNarrow', serif;
    color: ${S.colour.secondaryDark};
`

export const LeftSubtitle = styled.p`
    padding: 0;
    margin: 0;
    font-size: ${S.fontSize(14)}vw;
    line-height: ${S.height(18.86)}vh;
    font-family: 'ArchivoNarrow', serif;
    color: ${S.colour.secondaryDark};
`
