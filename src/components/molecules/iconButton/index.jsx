import { memo } from 'react';
import { Wrapper } from './styles';
import { Button, Icon } from '../../atoms';

function IconButton(props) {
    const iconSrc = props.icon;  
    const text = props.text;
    return (
        <Button
            $height={40}
            $width={120}
            {...props}
        >
          <Wrapper {...props}>
              <Icon 
                  src={iconSrc} 
                  $width={props.$iconWidth}
                  $height={props.$iconHeight}
              />
              {text}
          </Wrapper>
        </Button>    
    );
}

export default memo(IconButton);
