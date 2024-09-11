import { memo } from 'react'
import { Styled } from "./styles.jsx";

export const Footer = memo(
    function Footer(props) {
        return (
            <Styled {...props} >
                { props.children }
            </Styled>
        );
    }
);
