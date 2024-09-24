import { memo } from 'react';
import { enquireConst as CONST } from './constants';
import { Column, Link, SplitScreen } from '../../atoms';
import { EnquireForm, PageTitle } from '../../molecules';
import { Page } from '../../templates';
import Arrow from '../../../assets/Arrow.svg?component'
import { useMobile } from "../../../hooks/useMobile.jsx";

function Enquire(props) {
    const isMobile = useMobile();
    return (
        <Page
            $pageRef={props.$pageRef}
            $bgSecondary>
            <SplitScreen
                $paddingInline={isMobile ? 16 : 32}
                $paddingTop={isMobile ? 32 : 188}
                $paddingRight={isMobile ? 0 : 168}
            >
                <PageTitle>
                    {CONST.titleTxt}
                </PageTitle>
                <EnquireForm />
            </SplitScreen>
            <Column
                $paddingTop={66}
                $paddingBottom={68}
                $paddingRight={32}
                $justifyEnd
            >
                <Link $mobileHidden>
                    <Arrow onClick={() => props.navigateTo("landing")} />
                </Link>
            </Column>
        </Page>
    );
}


export default memo(Enquire);
