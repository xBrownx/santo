import styled, { css } from 'styled-components';
import { Media } from "../../util/Media.jsx";

export const Wrapper = styled.div`
    width: 100%;
    ${props => props.$mobileHidden && css`
        ${Media.md`
            display: none;
        `}
    `}
`