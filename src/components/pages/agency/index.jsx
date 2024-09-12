import { memo } from 'react';
import { agency as CONST } from './constants'
import { Column, Paragraph, SplitScreen, Subheading } from "../../atoms";
import { PageTitle } from "../../molecules";
import { Page } from '../../templates';




function Agency() {
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
                   <Subheading>
                   </Subheading>
               </Column>
           </SplitScreen>
        </Page>
    );
}

export default Agency;
