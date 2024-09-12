import styled from "styled-components";
import { Style as S } from "../../util";

export const StyledInput = styled.input`
    width: 100%;
    height: ${S.height(51)};
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid white;
    padding: 0 0 0 20px;

    &::placeholder {
        color: white;
    }

`