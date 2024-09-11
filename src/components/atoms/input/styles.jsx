import styled from "styled-components";
import { Style as S } from "../../util";

export const StyledInput = styled.input`
    width: 100%;
    ${S.size.height(51)};
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 0 0 0 20px;

    &::placeholder {
        color: white;
    }

`