import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const StyledButton = styled.button`
    ${S.size.square(48)};
    ${S.borderRadius};
    color: #2E4683;
    background-color: white;
    border: 1px solid #2E4683;
    ${S.font.size(16)};
    align-items: center;
    ${S.font.lineHeight(50)};
    text-align: center;
    
    ${props => props.$inActive && css`
        color: white;
        opacity: 0.15;
        background-color: #000;
    `}
`