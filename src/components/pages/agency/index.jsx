import { memo } from 'react';
import { agencyConst as CONST } from './constants'
import { Column, Paragraph, SplitScreen } from "../../atoms";
import { PageTitle } from "../../molecules";
import { AgencyAgents } from '../../organisms';
import { Page } from '../../templates';
import { useMobile } from "../../../hooks/useMobile.jsx";

function Agency(props) {
    const isMobile = useMobile();

    const agencies = CONST.agencies;
    return (
        <Page
            $pageRef={props.$pageRef}
            $bgPrimary
        >
            <SplitScreen
                $paddingBlock={isMobile ? 64 : 128}
                $paddingInline={isMobile ? 16 : 32}
                $gap={32}
            >
                <Column
                    $width={411}
                    $gap={32}
                    $mobileWidthUnset

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
                <Column
                    $gap={isMobile ? 48 : 16}
                    $paddingBottom={isMobile ? 64 : 0}
                    $paddingTop={isMobile ? 64 : 0}
                >
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
