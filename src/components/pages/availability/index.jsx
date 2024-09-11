import { memo } from 'react';
import { availability as CONST } from "../../../constants/index.jsx";
import { Page } from "../../templates/index.jsx";
import img from '../../../assets/Availability-Hero.png'
import { Column, Container, Paragraph, Row } from "../../atoms/index.jsx";
import { PageHeading } from "../../molecules/index.jsx";

function Availability() {
    return (
        <Page
            $bgPrimary
            padding={{top: 80, left: 32}}
        >

            <Column>
                <PageHeading $primary>{CONST.headingTxt}</PageHeading>
                <Row padding={{top: 36}}>
                    <Container width={322} padding={{right: 32}}>
                        <Column padding={{top: 36}} gap={32}>
                            <Paragraph size={18} lineHeight={26.94}>
                                {CONST.paragraphTxt}
                            </Paragraph>

                        </Column>

                    </Container>
                    <Container height={810} widthPc={100}>
                        <img src={img} alt={""} style={{width: "100%", objectFit: "cover"}} />
                    </Container>

                </Row>
            </Column>

        </Page>

    );
}


export default memo(Availability);