import { memo } from 'react';
import { enquireConst as CONST } from './constants';
import { Column, Link, SplitScreen } from '../../atoms';
import { EnquireForm, PageTitle } from '../../molecules';
import { Page } from '../../templates';
import Arrow from '../../../assets/Arrow.svg?component'

function Enquire(props) {
    return (
        <Page
            $pageRef={props.$pageRef}
            $bgSecondary>
            <SplitScreen
                $paddingInline={32}
                $paddingTop={188}
                $paddingRight={168}
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
                <Link>
                    <Arrow onClick={() => props.navigateTo("landing")} />
                </Link>
            </Column>
        </Page>
    );
}


export default memo(Enquire);
