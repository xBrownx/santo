import { memo } from 'react';
import { Wrapper } from './styles';
import { Button } from '../../atoms';

function IconButton(props) {
    const Icon = props.icon;  
    const text = props.text;
    return (
        <Button
            $height={40}
            $width={120}
            {...props}
        >
          <Wrapper {...props}>
              <Icon />
              {text}
          </Wrapper>
        </Button>    
    );
}

export default memo(IconButton);
