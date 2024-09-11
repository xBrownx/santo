import styled, {css} from "styled-components";
import { Style as S } from '../../util'

export const StyledRow = styled.div`
    ${S.flex.row};
    position: relative;
    
    ${props => props.padding && css`
        ${S.padding.trbl(props.padding)};
    `};
    
    ${props => props.margin && css`
        ${S.margin.trbl(props.margin)};
    `};
    
    ${props => props.gap && css`
        ${S.gap.height(props.gap)};
    `};
    
    ${props => props.$justifySpaceBetween & css`
        justify-content: space-between;
    `}
    
    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
    
    ${props => props.padding && css`
        ${S.padding.trbl(props.padding)};
    `};

    ${props => props.paddingInlineBlock && css`
        ${S.padding.inlineBlock(props.paddingInlineBlock)};
    `};

    ${props => props.margin && css`
        ${S.margin.trbl(props.margin)};
    `};

    ${props => props.marginInlineBlock && css`
        ${S.margin.inlineBlock(props.marginInlineBlock)};
    `};
    
    
`