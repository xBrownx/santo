import styled from "styled-components";
import { Style as S } from '../../util'
export const Background = styled.div`
    position: relative;
    background-image: url(${props => props.$src});
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 100vw;
    overflow: hidden;
    height: 0;
    padding-top: 58.81%;
`

export const Image = styled.img`
    position: absolute;
    top:0; 
    bottom:0; 
    left:0; 
    right:0;

    width: 100%;
    
`