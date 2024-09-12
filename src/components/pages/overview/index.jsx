import { memo } from 'react';
import styled from "styled-components";
import { overviewConst as CONST } from "./constants.jsx";
import { Column, Container, Paragraph, SplitScreen} from "../../atoms";
import { PageTitle } from "../../molecules";
import { Page } from '../../templates';

function Overview() {
    return (
        <Page 
            $bgPrimary
            $paddingBlock={{block: 64}}
        >
            <Column>
                <SplitScreen>
                    <Column>
                        <PageTitle $primary>
                            {CONST.titleTxt}
                        </PageTitle>
                        <Paragraph>
                            {CONST.paragraphTxt}
                        </Paragraph>
                    </Column>
                    <Column>


                    </Column>
                </SplitScreen>
                <Container>

                </Container>
            </Column>
        </Page>
    );
}


export const StyledUl = styled.ul`
    list-style-type: disc;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
`

export default memo(Overview);
