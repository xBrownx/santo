import { memo } from 'react';
import { StyledImage } from './styles';

function Image(props) {
    return (
        <StyledImage {...props} />
    )
}

export default memo(Image);
