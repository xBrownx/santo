import styled, { css } from 'styled-components'
import { Style as S } from '../../util'
import { Media } from '../../util/Media'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    
    ${props => props.$relative && css`
        position: relative;
    `};
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `};
    
    ${props => props.$widthPerCent && css`
        width: ${props.$widthPerCent}%;
    `};
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};
    
    ${props => props.$heightPerCent && css`
        height: ${props.$heightPerCent}%;
    `};
    
    ${props => props.$paddingInline && css`
        padding-inline: ${S.width(props.$paddingInline)}vw;
        
        ${Media.md`
            padding-inline: ${props.$paddingInline}px;
        `}
    `};
    
    ${props => props.$paddingBlock && css`
        padding-block: ${S.height(props.$paddingBlock)}vh;
        ${Media.md`
            padding-block: ${props.$paddingBlock}px;
        `}
    `};
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
        
        ${Media.md`
            padding-top: ${props.$paddingTop}px;
        `}
    `};
    
    ${props => props.$paddingRight && css`
        padding-right: ${S.width(props.$paddingRight)}vw;
        
        ${Media.md`
            padding-right: ${props.$paddingRight}px;
        `}
    `};
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${S.height(props.$paddingBottom)}vh;
        
        ${Media.md`
            padding-bottom: ${props.$paddingBottom}px;
        `}
        
    `};
    
    ${props => props.$paddingLeft && css`
        padding-left: ${S.width(props.$paddingLeft)}vw;
        
        ${Media.md`
            padding-left: ${props.$paddingLeft}px;
        `}
    `};
    
    ${props => props.$gap && css`
        gap: ${S.height(props.$gap)}vh;
        
        ${Media.md`
            gap: ${props.$gap}px;
        `}
        
    `};
    
    ${props => props.$centre && css`
        justify-content: center;
        align-items: center;
    `};
    
    ${props => props.$justifyEnd && css`
        align-items: end;
    `};
    
    ${Media.md`
        width: 100%;
    `};
    
    ${props => props.$mobileHidden && css`
        ${Media.md`
            display: none;
        `}
    `}

    ${props => props.$mobileHeightUnset && css`
        ${Media.md`
            height: auto;
        `}
    `}

    ${props => props.$mobileWidthUnset && css`
        ${Media.md`
            width: auto;
        `}
    `}
    
`