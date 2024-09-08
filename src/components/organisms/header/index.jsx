import {memo} from 'react';
import {header as CONST} from '../../../constants'
import {Container, StyledLi, StyledUl} from './styles';

const titleText = CONST.titleText;
const links = CONST.linkText;

export const Header = memo(
    function Header(props) {
        return (
            <Container {...props}>
                {titleText}
                <Links/>
            </Container>
        );
    }
);

const Links = memo(
    function Links() {
        return (
            <StyledUl>
                {links.map((link, i) => {
                        return (
                            <StyledLi key={i}>
                                {link}
                            </StyledLi>
                        );
                    }
                )}
            </StyledUl>
        );
    }
);
