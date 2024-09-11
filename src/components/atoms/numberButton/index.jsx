import { memo } from 'react';
import { StyledButton } from './styles';


export const NumberButton = memo(
    function NumberButton(props) {
        return (
            <StyledButton {...props}>
                {props.children}
            </StyledButton>
        );
    }
);
