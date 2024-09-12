import styled, {css} from 'styled-components'
import { Style as S } from '../../util'

export const StyledPage = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    max-width: 100vw !important;
    overflow: hidden;

    ${props => props.$fullScreen && css`
        min-height: 100vh;
    `};
    
    ${props => props.$minHeight && css`
        min-height: ${S.height(props.$minHeight)}vh;
    `};
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
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
    
    

`
