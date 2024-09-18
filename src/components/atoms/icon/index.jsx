import { memo } from 'react';

function Icon(props) {
    const IconSrc = props.src;  
    return(
        <Container {...props}>
            <IconSrc />
        </Container>
    );
}

export default memo(Icon);
