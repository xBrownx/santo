import styled, { css } from 'styled-components'
import { Style as S } from '../../util'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    
    ${props => props.$paddingInline && css`
        padding-inline: ${S.width(props.$paddingInline)}vw;
    `};
    
    ${props => props.$paddingBlock && css`
        padding-block: ${S.height(props.$paddingBlock)}vh;
    `};
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
    `};
    
    ${props => props.$paddingRight && css`
        padding-right: ${S.width(props.$paddingRight)}vw;
    `};
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${S.height(props.$paddingBottom)}vh;
    `};
    
    ${props => props.$paddingLeft && css`
        padding-left: ${S.width(props.$paddingLeft)}vw;
    `};
    
    ${props => props.$gap && css`
        gap: ${S.width(props.$gap)}vw;
    `};
    
    ${props => props.$pointer && css`
        &:hover {
            cursor: pointer;
        }
    `};
    
    ${props => props.$fitContent && css`
        width: fit-content;
    `};
    
    ${props => props.$justifyEnd && css`
        justify-content: end;
    `};
    
`