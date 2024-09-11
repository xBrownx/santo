import { forwardRef, memo } from 'react';
import { agency as CONST } from '../../../constants'
import { Page } from '../../templates';
import { Column } from "../../molecules/column/index.jsx";
import { PageHeading } from "../../molecules/index.jsx";
import { Paragraph } from "../../atoms/paragraph/index.jsx";


const Agency = memo(
    forwardRef(
        function () {
            return (
                <Page $bgPrimary>
                    <Column gap={32}>
                        <PageHeading $primary>
                            {CONST.headingTxt}
                        </PageHeading>
                        <Paragraph size={18} lineHeight={26.94}>
                            {CONST.paragraphTxt}
                        </Paragraph>

                    </Column>
                </Page>
            );
        }
    )
);

export default Agency;