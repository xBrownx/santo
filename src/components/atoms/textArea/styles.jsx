import styled from "styled-components";
import { Style as S } from '../../util'

export const StyledTextArea = styled.textarea`
    height: ${S.height(109)};
    width: 100%;
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid white;
    padding: 15px 0 0 20px;
    
    resize: none;
    
    &::placeholder {
        color: white;
    }
    
`