import styled from "styled-components";
import { Style as S } from '../../util'

export const StyledTextArea = styled.textarea`
    ${S.size.height(109)};
    width: 100%;
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 15px 0 0 20px;
    
    resize: none;
    
    &::placeholder {
        color: white;
    }
    
`