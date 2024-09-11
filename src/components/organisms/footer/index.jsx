import { memo } from 'react'
import { Styled } from "./styles.jsx";

function Footer(props) {
    return (
        <Styled {...props} >
            {props.children}
        </Styled>
    );
}

export default memo(Footer);
