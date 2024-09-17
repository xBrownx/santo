import { memo } from 'react';
import { header as CONST } from './constants'
import { Container, InnerButtonWrapper, LeftSubtitle, LeftTitle, StyledLi, StyledUl } from './styles';
import { Button, Column, Row } from "../../atoms";
import Logo from "../../../assets/Small Log Dark.svg";
import Email from "../../../assets/Header-Email-Icon.svg"
const titleText = CONST.titleTxt;
const links = CONST.linkTxt;

function Header() {
    return (
        <Container
            $height={104}
        >
            <Row $fillParent $gap={20}>
                <Logo style={{ height: "60px" }} />
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
                {
                    links.map((link, i) => {
                        return (
                            <StyledLi key={i}>
                                {link}
                            </StyledLi>
                        );
                    }
                )}
                <StyledLi>
                <Button
                    $variantOne
                    $height={40}
                    $width={120}
                    $gap={8}
                >
                    <InnerButtonWrapper>
                        <Email />
                        ENQUIRE
                    </InnerButtonWrapper>

                </Button>
            </StyledLi>
            </StyledUl>
        );
    }
);

export default memo(Header);
