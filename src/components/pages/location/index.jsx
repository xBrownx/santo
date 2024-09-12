import { memo } from 'react';
import { Page } from '../../templates';

import { Column, Paragraph } from "../../atoms/";
import { PageTitle } from "../../molecules/index.jsx";
import { locationConst as CONST } from "./constants.jsx";

function Location() {
    return (
        <Page $bgSecondary>
                <Column
                    $paddingInline={32}
                    $paddingBlock={64}

                >
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
        </Page>
    );
}

export default memo(Location);