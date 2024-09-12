import { memo } from 'react';
import { StyledSubheading } from './styles'

function Subheading(props) {
    return (
        <div {...props}>
          {props.children}
        </div>
    );
}

export default memo(Subheading);
