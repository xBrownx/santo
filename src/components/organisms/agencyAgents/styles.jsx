import styled from 'styled-components';
import { Style as S } from '../../util';

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
`

export const Li = styled.li`
    margin: 0 0 ${S.height(32)}vh 0;
    padding: 0;
    width: fit-content;
`
