import { memo } from 'react';
import { Page } from '../../templates';

import { Column, Paragraph } from "../../atoms/";
import { PageTitle } from "../../molecules/index.jsx";
import { locationConst as CONST } from "./constants.jsx";

import img from '../../../assets/Location.png'
import Video from "../../atoms/video/index.jsx";

function Location(props) {
    return (
        <Page
            $pageRef={props.$pageRef}
            $bgSecondary
            $paddingBlock={64}
        >
            <Column
                $paddingInline={32}
                $paddingBlock={64}
            >
                <Column $paddingBottom={32}>
                    <PageTitle $lineHeight={129.31}>
                        LOCATION
                    </PageTitle>
                    <Paragraph
                        $secondary
                        $subheading
                        $fontSize={24}
                        $lineHeight={32.33}
                    >
                        {CONST.subtitleTxt}
                    </Paragraph>
                </Column>
                <Video {...CONST.assets.video} />
            </Column>
        </Page>
    );
}

export default memo(Location);