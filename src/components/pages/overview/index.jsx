import { memo } from 'react';
import styled from "styled-components";
import { overview as CONST } from "./overview.jsx";
import { Page } from '../../templates/index.jsx';
import { Button, Column, Container, Paragraph, Row } from "../../atoms/index.jsx";
import { PageHeading } from "../../molecules/index.jsx";

function Overview() {
    return (
        <Page
            $bgPrimary
            paddingInlineBlock={{block: 64}}
        >
            <Row paddingInlineBlock={{inline: 32}}>
                <Container width={554}>
                    <Column gap={32}>
                        <PageHeading $primary>
                            {CONST.headingTxt}
                        </PageHeading>

                        <Paragraph size={18} lineHeight={26.94}>
                            {CONST.paragraphTxt}
                        </Paragraph>
                        <Button $fillParent>
                            {CONST.buttonTxt}
                        </Button>
                    </Column>
                </Container>
                <Container
                    $centre
                    widthPc={100}
                >
                    <Row gap={64}>
                        <StyledUl>
                            <li><Paragraph><b>Total Site Area:</b></Paragraph></li>
                            <li><Paragraph><b>Total Floor Area:</b></Paragraph></li>
                            <li><Paragraph><b>Tenure Type:</b></Paragraph></li>
                            <li><Paragraph>14261.94 m²</Paragraph></li>
                            <li><Paragraph>11618 m²</Paragraph></li>
                            <li><Paragraph>Vacant Possession</Paragraph></li>
                        </StyledUl>
                        <StyledUl>
                            <li><Paragraph><b>Offices:</b></Paragraph></li>
                            <li><Paragraph><b>Units Available:</b></Paragraph></li>
                            <li><Paragraph><b>Construction:</b></Paragraph></li>
                            <li><Paragraph>xx</Paragraph></li>
                            <li><Paragraph>xx</Paragraph></li>
                            <li><Paragraph>xx</Paragraph></li>
                        </StyledUl>
                    </Row>
                </Container>
            </Row>
            {/*    Carousel */}
        </Page>
    );
}


export const StyledUl = styled.ul`
    list-style-type: disc;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
`

export default memo(Overview);