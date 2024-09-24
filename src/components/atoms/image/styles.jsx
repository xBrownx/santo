import styled, { css } from 'styled-components';
import { Style as S } from '../../util';
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    width: ${props => S.width(props.$width)}vw;
    height: ${props => S.height(props.$height)}vh;
    
    ${Media.md`
        width: ${props => props.$width}px;
        height: ${props => props.$height}px;
    `}
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
