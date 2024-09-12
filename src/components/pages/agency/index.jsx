import { memo } from 'react';
import { agencyConst as CONST } from './constants'
import { Column, Paragraph, SplitScreen, Subheading } from "../../atoms";
import { PageTitle } from "../../molecules";
import { AgencyAgents } from '../../organisms';
import { Page } from '../../templates';




function Agency() {
    const agencies = CONST.agencies;
    return (
        <Page 
            $bgPrimary
            paddingTop={128}
            paddingInline={32}
        >
            <SplitScreen>
                <Column>
                    <PageTitle>
                        {CONST.titleTxt}
                    </PageTitle>
                    <Paragraph>
                        {CONST.paragraphTxt}
                    </Paragraph>
                </Column>
                <Column>
                    {agencies.map(agency, () => {
                        return(
                            <AgencyAgents 
                                key={agency.key}
                                agency={agency} 
                            />
                        );
                    })
                </Column>
            </SplitScreen>
        </Page>
    );
}

export default Agency;
