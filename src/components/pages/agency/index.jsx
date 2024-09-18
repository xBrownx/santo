import { memo } from 'react';
import { agencyConst as CONST } from './constants'
import { Column, Paragraph, SplitScreen } from "../../atoms";
import { PageTitle } from "../../molecules";
import { AgencyAgents } from '../../organisms';
import { Page } from '../../templates';

function Agency(props) {
    const agencies = CONST.agencies;
    return (
        <Page
            $pageRef={props.$pageRef}
            $bgPrimary
            $paddingBlock={128}
            $paddingInline={32}
        >
            <SplitScreen>
                <Column
                    $width={411}
                    $gap={32}
                >
                    <PageTitle
                        $lineHeight={100}
                        $secondary
                    >
                        {CONST.titleTxt}
                    </PageTitle>
                    <Paragraph
                        $fontSize={20}
                        $lineHeight={26.94}
                        $opacity={0.5}
                    >
                        {CONST.paragraphTxt}
                    </Paragraph>
                </Column>
                <Column $gap={16}>
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
