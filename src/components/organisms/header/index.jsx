import { memo } from 'react';
import { header as CONST } from './constants'
import { Container, LeftSubtitle, LeftTitle, StyledLi, StyledUl } from './styles';
import { Column, Row } from "../../atoms/index.jsx";
import Logo from "../../../assets/Small Log Dark.svg";

const titleText = CONST.titleTxt;
const links = CONST.linkTxt;

function Header() {
    return (
        <Container
            $height={80}
        >
            <Row $fillParent $gap={20}>
                <Logo style={{height: "60px"}}/>
                <Column>
                    <LeftTitle>{CONST.left[0]}</LeftTitle>
                    <LeftSubtitle>{CONST.left[1]}</LeftSubtitle>
                </Column>
            </Row>
            <Links />
        </Container>
    );
}

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

export default memo(Header);
