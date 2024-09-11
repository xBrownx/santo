import { forwardRef, memo } from 'react';
import { agency as CONST } from '../../../constants'
import { Page } from '../../templates';
import { PageHeading } from "../../molecules";
import { Column, Paragraph } from "../../atoms";


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