import { memo } from 'react';
import { agency as CONST } from '../../../constants'
import { Column, Paragraph } from "../../atoms";
import { PageTitle } from "../../molecules";
import { Page } from '../../templates';




function Agency() {
    return (
        <Page $bgPrimary>
            <Column gap={32}>
                <PageTitle $primary>
                    {CONST.titleTxt}
                </PageTitle>
                <Paragraph 
                    size={18} 
                    lineHeight={26.94}
                >
                    {CONST.paragraphTxt}
                </Paragraph>
            </Column>
        </Page>
    );
}

export default Agency;
