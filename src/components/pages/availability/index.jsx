import { memo } from 'react';
import { availabilityConst as CONST } from "./constants";
import { Page } from "../../templates/index.jsx";
import img from '../../../assets/Availability-Hero.png'
import { Column, Container, Paragraph, Row } from "../../atoms/index.jsx";
import { PageTitle } from "../../molecules/";

function Availability() {
    return (
        <Page $bgPrimary>
            <Column
                $paddingInline={32}
                $paddingBlock={64}
            >
                <PageTitle
                    $secondary
                    $lineHeight={129.31}
                >
                    {CONST.titleTxt}
                </PageTitle>

            </Column>
        </Page>

    );
}


export default memo(Availability);