import { memo } from 'react';

function Icon(props) {
    const IconSrc = props.icon;  
    return(
        <Container {...props}>
            <IconSrc />
        </Container>
    );
}

export default memo(Icon);
