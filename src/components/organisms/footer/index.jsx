import { memo } from 'react'
import { footerConst as CONST } from './constants';
import { Container, LeftSubtitle, LeftTitle } from "./styles";
import Logo from '../../../assets/Small Log.svg';

import { Column, Row, SplitScreen, Image } from "../../atoms";

function Footer() {
    return (
        <Container>
            <SplitScreen
                $paddingInline={32}
                $paddingBottom={16}
            >
                <Row $gap={20}>
                    <Logo />
                    <Column>
                        <LeftTitle>{CONST.left[0]}</LeftTitle>
                        <LeftSubtitle>{CONST.left[1]}</LeftSubtitle>
                    </Column>
                </Row>
                <Column $justifyEnd>
                   <Image {...CONST.assets.logo} />
                </Column>
            </SplitScreen>
        </Container>
    );
}

export default memo(Footer);
