import { memo } from 'react';
import { availabilityConst as CONST } from "./constants";
import { Page } from "../../templates/index.jsx";
import img from '../../../assets/Availability-Hero.png'
import { Column, Container, Paragraph, Row } from "../../atoms/index.jsx";
import { PageTitle } from "../../molecules/";

function Availability() {
    return (
        <Page
            $bgPrimary
            $paddingTop={80}
            $paddingLeft={32}
        >

            <Column>
                <PageTitle $primary>
                    {CONST.titleTxt}
                </PageTitle>
                <Row $paddingTop={36}>
                    <Container
                        $width={322}
                        $paddingRight={32}
                    >
                        <Column
                            $paddingTop={36}
                            $gap={32}
                        >
                            <Paragraph
                                $size={18}
                                $lineHeight={26.94}
                            >
                                {CONST.paragraphTxt}
                            </Paragraph>

                        </Column>

                    </Container>
                    <Container
                        $height={810}
                        $widthPc={100}
                    >
                        <img src={img} alt={""} style={{width: "100%", objectFit: "cover"}} />
                    </Container>

                </Row>
            </Column>

        </Page>

    );
}


export default memo(Availability);