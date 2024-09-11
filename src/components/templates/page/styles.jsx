import styled, {css} from 'styled-components'
import {
    Style as S,
} from '../../util'

export const StyledPage = styled.section`
    ${S.flex.column};
    
    position: relative;
    //min-width: 100%;
    //height: 100%;
    z-index: 0;
    max-width: 100vw !important;
    overflow: hidden;

    ${props => props.$fullScreen && css`
        min-height: 100vh;
    `};
    
    ${props => props.minHeight && css`
        ${S.size.minHeight(props.minHeight)};
    `};
    
    ${props => props.height && css`
        ${S.size.height(props.height)};
    `};
    
    ${props => props.$bgPrimary && css`
        background-color: white;
    `};

    ${props => props.$bgSecondary && css`
        background-color: ${S.colour.secondary};
    `};

    ${props => props.$xStart && css`
        justify-content: start;
    `};
    
    ${props => props.$xCentre && css`
        justify-content: center;
    `};
    
    ${props => props.$xEnd && css`
        justify-content: end;
    `};

    ${props => props.$yStart && css`
        align-items: start;
    `};
    
    ${props => props.$yCentre && css`
        align-items: center;
    `};
    
    ${props => props.$yEnd && css`
        align-items: end;
    `};
    
    ${props => props.paddingInlineBlock && css`
        ${S.padding.inlineBlock(props.paddingInlineBlock)};
    `}
    
    ${props => props.padding && css`
        ${S.padding.trbl(props.padding)};
    `}

    ${props => props.marginInlineBlock && css`
        ${S.margin.inlineBlock(props.marginInlineBlock)};
    `}

`
