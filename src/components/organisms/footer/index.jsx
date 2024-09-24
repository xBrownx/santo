import { memo } from 'react'
import { footerConst as CONST } from './constants';
import { Container, LeftSubtitle, LeftTitle } from "./styles";
import Logo from '../../../assets/Small Log.svg';
import { Column, Row, SplitScreen, Image } from "../../atoms";
import { useMobile } from "../../../hooks/useMobile.jsx";

function Footer() {
    const isMobile = useMobile();

    return (
        <Container>
            <SplitScreen
                $paddingInline={32}
                $paddingBottom={16}
            >
                {!isMobile ?
                    <Row $gap={20}>
                        <Logo />
                        <Column>
                            <LeftTitle>{CONST.left[0]}</LeftTitle>
                            <LeftSubtitle>{CONST.left[1]}</LeftSubtitle>
                        </Column>
                    </Row>
                    :
                    <Column $centre>
                        <Logo />
                        <Column $centre>
                            <LeftTitle>{CONST.left[0]}</LeftTitle>
                            <LeftSubtitle>{CONST.left[1]}</LeftSubtitle>
                        </Column>
                    </Column>
                }
                    <Column $justifyEnd={!isMobile} $centre={isMobile}>
                       <Image {...CONST.assets.logo} />
                    </Column>

            </SplitScreen>
        </Container>
    );
}

export default memo(Footer);
