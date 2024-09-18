import styled, { css } from 'styled-components';
import { Style as S } from '../../util';

export const StyledImage = styled.img`
    width: ${props => S.width(props.$width)}vw;
    height: ${props => S.height(props.$height)}vh;
`
