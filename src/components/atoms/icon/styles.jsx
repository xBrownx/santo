import styled, { css } from 'styled-components';
import { Style as S } from '../../util';
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
        
        ${Media.md`
            width: ${props.$width}px;
        `};
    `};

    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
        
        ${Media.md`
            height: ${props.$height}px;
        `};
        
    `};
    
    svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
