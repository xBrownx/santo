import { memo } from 'react';
import { Styled } from './styles';

export const Header = memo(
    function Header(props) {
        return (
            <Styled {...props}>
                {props.children}
            </Styled>
        );
    }
);
