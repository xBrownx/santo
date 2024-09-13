import { memo } from 'react';
import styled from "styled-components";
import { overviewConst as CONST } from "./constants.jsx";
import { Button, Column, Container, Paragraph, Row, SplitScreen, Subheading } from "../../atoms";
import { PageTitle, ScrollingCarousel } from "../../molecules";
import { Page } from '../../templates';
import KeyHighlights from '../../../assets/keyHighlights.svg'
import img01 from '../../../assets/car1.png'
import img02 from '../../../assets/car2.png'
import { SlideCarousel } from "../../molecules/slideCarousel/index.jsx";
function Overview() {
    const imgCarousel = [img01, img02, img01, img02];
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
                <SplitScreen $paddingBottom={70}>
                    <Column
                        $width={544}
                    >
                        <Paragraph $fontSize={16.5} $opacity={0.5}>
                            {CONST.paragraphTxt}
                        </Paragraph>
                    </Column>
                    <Column>
                        <Row $gap={8}>
                            <KeyHighlights />
                            <Subheading>
                                {CONST.subtitleTxt}
                            </Subheading>
                        </Row>

                        <StyledUl>

                            <StyledLi>
                                <Row>
                                    <Paragraph $fontSize={20} $weight={600}>
                                        Land Area: <></>
                                    </Paragraph>
                                    <Paragraph $fontSize={20} $opacity={0.5}>
                                        868 m²
                                    </Paragraph>
                                </Row>
                            </StyledLi>
                            <StyledLi>
                                 <Row>
                                    <Paragraph $fontSize={20} $weight={600}>
                                        Floor Area: <></>
                                    </Paragraph>
                                    <Paragraph $fontSize={20} $opacity={0.5}>
                                        243 - 868 m²
                                    </Paragraph>
                                </Row>
                            </StyledLi>
                            <StyledLi>
                                 <Row>
                                    <Paragraph $fontSize={20} $weight={600}>
                                        Internal Clearance: <></>
                                    </Paragraph>
                                    <Paragraph $fontSize={20} $opacity={0.5}>
                                        7.75 - 115 m
                                    </Paragraph>
                                </Row>
                            </StyledLi>
                            <StyledLi>
                                <Row>
                                    <Paragraph $fontSize={20} $weight={600}>
                                       Completion: <></>
                                    </Paragraph>
                                    <Paragraph $fontSize={20} $opacity={0.5}>
                                        Q2 2025
                                    </Paragraph>
                                </Row>
                            </StyledLi>
                        </StyledUl>
                        <Button $height={40} $fillParent>{CONST.buttonTxt}</Button>
                    </Column>
                </SplitScreen>
                <Column  $height={511}>
                    <SlideCarousel images={imgCarousel}/>
                </Column>
            </Column>
        </Page>
    )
        ;
}


export const StyledUl = styled.ul`
    padding: 0;
    list-style-type: disc;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
    gap: 0 16px;
`

const StyledLi = styled.li`
    padding: 0;
    margin: 0;
    height: fit-content;
`

export default memo(Overview);
