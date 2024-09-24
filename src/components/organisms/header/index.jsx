import { memo } from 'react';
import { headerConst as CONST } from './constants'
import { useScroll } from '../../../hooks/useScroll'
import { Container, InnerButtonWrapper, LeftSubtitle, LeftTitle, StyledLi, StyledUl } from './styles';
import { Button, Column, Row } from "../../atoms";


function Header(props) {
    const Logo = CONST.assets.logo;
    const titleTxt = CONST.titleTxt;
    const { scrollDirection } = useScroll();

    return (
        <Container
            $height={104}
            $hidden={scrollDirection === "up"}
        >
            <Row
                $fillParent
                $gap={20}
                onClick={() => props.navigateTo("landing")}
            >
                <Logo style={{height: "60px"}} />
                <Column>
                    <LeftTitle>
                        {titleTxt[0]}
                    </LeftTitle>
                    <LeftSubtitle>
                        {titleTxt[1]}
                    </LeftSubtitle>
                </Column>
            </Row>
            <Links navigateTo={props.navigateTo} />
        </Container>
    );
}

const Links = memo(
    function Links(props) {
        const Email = CONST.assets.email;
        const links = CONST.navLinks;

        return (
            <StyledUl>
                {
                    links.map((link) => {
                            return (
                                link.isButton ?
                                    <Button
                                        key={link.id}
                                        $variantOne
                                        $height={40}
                                        $width={120}
                                        $gap={8}
                                        onClick={() => props.navigateTo(link.id)}
                                    >
                                        <InnerButtonWrapper>
                                            <Email />
                                            {link.label}
                                        </InnerButtonWrapper>

                                    </Button>

                                    : <StyledLi
                                        key={link.id}
                                        onClick={() => props.navigateTo(link.id)}
                                    >
                                        {link.label}
                                    </StyledLi>
                            );
                        }
                    )}
            </StyledUl>
        );
    }
);

export default memo(Header);
