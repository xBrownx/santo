import { memo } from 'react';
import { agencyConst as CONST } from './constants'
import { Column, Paragraph, SplitScreen } from "../../atoms";
import { PageTitle } from "../../molecules";
import { AgencyAgents } from '../../organisms';
import { Page } from '../../templates';

function Agency() {
    const agencies = CONST.agencies;
    return (
        <Page 
            $bgPrimary
            $paddingTop={128}
            $paddingInline={32}
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
                    {agencies.map(agency => {
                        return(
                            <AgencyAgents 
                                key={agency.id}
                                agencyName={agency.agencyName}
                                agents={agency.agents}
                            />
                        );
                    })}
                </Column>
            </SplitScreen>
        </Page>
    );
}

export default memo(Agency);
