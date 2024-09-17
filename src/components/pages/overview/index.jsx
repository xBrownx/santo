import { memo } from 'react';
import styled from "styled-components";
import { overviewConst as CONST } from "./constants.jsx";
import { Button, Column, Paragraph, Row, SplitScreen, Subheading } from "../../atoms";
import { PageTitle } from "../../molecules";
import { Page } from '../../templates';
import KeyHighlights from '../../../assets/keyHighlights.svg'
import { OverviewCarousel } from "../../organisms/overviewCarousel/index.jsx";

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
                <SplitScreen $paddingBottom={70}>
                    <Column
                        $width={576}
                        $gap={16}
                    >
                        <Subheading>
                            {CONST.subtitleTxt[0]} <br />
                            {CONST.subtitleTxt[1]}
                        </Subheading>
                        <Paragraph $fontSize={20} $opacity={0.5}>
                            {CONST.paragraphTxt[0]}
                        </Paragraph>
                        <div>
                            <Paragraph $fontSize={20} $opacity={0.5}>
                                {CONST.paragraphTxt[1]}
                            </Paragraph>
                            <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                                {CONST.paragraphBullets.map((bullet, i) => {
                                    return (
                                        <li key={i} style={{ color: "black" }}>
                                            <Paragraph $fontSize={20} $opacity={0.5}>{bullet}</Paragraph>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Column>
                    <Column $width={672}>
                        <Row $gap={8}>
                            <KeyHighlights />
                            <Subheading>
                                {CONST.subtitleTxtRight}
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
                                        Unit Sizes: <></>
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
                                        Timing: <></>
                                    </Paragraph>
                                    <Paragraph $fontSize={20} $opacity={0.5}>
                                        Q2 2025
                                    </Paragraph>
                                </Row>
                            </StyledLi>
                        </StyledUl>
                        <Column $paddingTop={32}>
                            <Button $height={40} $fillParent>{CONST.buttonTxt}</Button>
                        </Column>
                        <Column $paddingTop={32}>
                            <img src={CONST.assets.img} alt={""} />
                        </Column>
                    </Column>
                </SplitScreen>
                <OverviewCarousel />
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
