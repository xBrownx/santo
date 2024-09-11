import { memo } from 'react';
import { StyledButton } from './styles';

export const ButtonSpecial = memo(
    function ButtonSpecial(props) {
        return (
            <StyledButton {...props}>
                {props.children}
            </StyledButton>
        );
    }
);
