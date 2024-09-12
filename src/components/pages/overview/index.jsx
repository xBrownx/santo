import { memo } from 'react';
import styled from "styled-components";
import { overviewConst as CONST } from "./constants.jsx";
import { Button, Column, Container, Paragraph, SplitScreen, Subheading } from "../../atoms";
import { PageTitle } from "../../molecules";
import { Page } from '../../templates';


function Overview() {
    return (
        <Page $bgPrimary>
            <Column
                $paddingInline={32}
                $paddingBlock={64}
                $gap={32}
            >
                <PageTitle $secondary>
                    {CONST.titleTxt}
                </PageTitle>
                <SplitScreen>
                    <Column
                        $width={544}
                    >
                        <Paragraph $fontSize={16.5}>
                            {CONST.paragraphTxt}
                        </Paragraph>
                    </Column>
                    <Column>
                        <Subheading>
                            {CONST.subtitleTxt}
                        </Subheading>
                        <StyledUl>
                            <Paragraph>Land Area</Paragraph>
                        </StyledUl>
                        <Button $fillParent>{CONST.buttonTxt}</Button>
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
