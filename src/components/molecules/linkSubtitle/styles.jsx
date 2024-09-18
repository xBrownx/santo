import styled from 'styled-components'
import {Style as S } from '../../util'

export const Container = styled.div`
    height: ${S.height(40)}vh;
    border-bottom: 1px solid #2E4683;
    width: fit-content;
`

export const Wrapper = styled.div`
    width: ${S.width(24)}vw;
    height: auto;
    
    svg {
        width: 100%;
        height: 100%;
    }
`
