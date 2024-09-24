import styled from 'styled-components';
import { Style as S } from '../../util';
import { Media } from "../../util/Media.jsx";

export const StyledUl = styled.ul`
    float: left;
    position: relative;
    padding: 0;
    margin: 0;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style: none;
    gap: ${S.width(32)}vw;
    width: fit-content;
    
    ${Media.md`
        -webkit-columns: 1;
        -moz-columns: 1;
        columns: 1;
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    `}
    
`

export const Li = styled.li`
    margin: 0 0 ${S.height(32)}vh 0;
    padding: 0;
    width: fit-content;
    
    ${Media.md`
        margin: 0;
        width: 100%;
    `}
    
`
