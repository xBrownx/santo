import { memo } from 'react';
import { availabilityConst as CONST } from "./constants";
import { Page } from "../../templates";
import { Column, Paragraph, Row, SplitScreen } from "../../atoms";
import { PageTitle } from "../../molecules/";
import { Background, Image, LegendSquare } from "./styles.jsx";
import AvailabilityOverlay from "../../organisms/availabilityOverlay/index.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";

function Availability(props) {
    const isMobile = useMobile();
    const backgroundImage = CONST.assets.backgroundImg;
    return (
        <Page
            $pageRef={props.$pageRef}
            $bgPrimary
        >
            <Column
                $paddingInline={isMobile ? 16 : 32}
                $paddingTop={64}
                $paddingBottom={14}
                $relative
            >
                <SplitScreen>
                    <PageTitle
                        $secondary
                        $lineHeight={129.31}
                    >
                        {CONST.titleTxt}
                    </PageTitle>
                    <Column
                        $centre
                        $justifyEnd
                        $heightPerCent={100}
                        $mobileHidden
                    >
                        <div>
                            <Column
                                $heightPerCent={100}
                                $gap={16}
                            >
                            <Row $gap={16} $fitContent>
                                <LegendSquare $primary/>
                                <Paragraph $fontSize={20} $opacity={0.5} $lineHeight={32}>
                                    Available in stage 1
                                </Paragraph>
                            </Row>
                            <Row $gap={16} $fitContent>
                                <LegendSquare $secondary />
                                <Paragraph $fontSize={20} $opacity={0.5}>
                                    Future stage release
                                </Paragraph>
                            </Row>
                            </Column>
                        </div>
                    </Column>
                </SplitScreen>
            </Column>
            <Background {...backgroundImage}>
                <Image
                    $width={backgroundImage.width}
                    $height={backgroundImage.height}
                    {...backgroundImage}
                />
                <AvailabilityOverlay />
            </Background>
        </Page>

    );
}


export default memo(Availability);