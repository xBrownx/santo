import styled from "styled-components";
import { Style as S } from "../../util";
import { Media } from "../../util/Media.jsx";

export const StyledInput = styled.input`
    width: 100%;
    height: ${S.height(59)}vh;
    background-color: transparent;
    
    box-sizing: border-box;
    border: 1px solid white;
    padding: 0 0 0 20px;
    font-size: ${S.fontSize(20)}vw;
    font-family: ArchivoNarrow, serif;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);;
    }
    
    ${Media.md`
        font-size: 16px;
        line-height: $21.55px;
        height: 46px;
        padding: 0 0 0 14px;
    `}

`