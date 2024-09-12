import { memo } from 'react';
import { enquireConst as CONST } from './constants';
import { SplitScreen } from '../../atoms';
import { EnquireForm, PageTitle } from '../../molecules';
import { Page } from '../../templates';


function Enquire() {
    return (
        <Page 
            $bgPrimary
            paddingInline={32}
            paddingTop={188}
        >
            <SplitScreen>
                <PageTitle>
                    {CONST.titleTxt}
                </PageTitle>
                <EnquireForm />
            </SplitScreen>
        </Page>
    );
}


export default memo(Enquire);
