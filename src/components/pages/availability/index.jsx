import { memo } from 'react';
import { availabilityConst as CONST } from "./constants";
import { Page } from "../../templates/index.jsx";
import { Column } from "../../atoms/index.jsx";
import { PageTitle } from "../../molecules/";
import backgroundImg from '../../../assets/Availability 1.png'
import { Background, Image } from "./styles.jsx";
import AvailabilityOverlay from "../../organisms/availabilityOverlay/index.jsx";

function Availability() {
    return (
        <Page $bgPrimary>
            <Column
                $paddingInline={32}
                $paddingTop={64}
                $relative
            >
                <PageTitle
                    $secondary
                    $lineHeight={129.31}
                >
                    {CONST.titleTxt}
                </PageTitle>

            </Column>
            <Background>
                    <Image src={backgroundImg} alt={""} />
                    <AvailabilityOverlay />
                </Background>
        </Page>

    );
}


export default memo(Availability);