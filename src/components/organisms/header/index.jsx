import { memo } from 'react';
import { header as CONST } from '../../../constants'
import { Container, StyledLi, StyledUl } from './styles';
import { StyledHeading } from "../../atoms/heading/styles.jsx";

const titleText = CONST.titleText;
const links = CONST.linkText;

export const Header = memo(
    function Header(props) {
        return (
            <Container height={80} {...props}>
                <StyledHeading
                    $primary
                    size={32}
                    weight={700}

                >
                    {titleText}
                </StyledHeading>
                <Links />
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
