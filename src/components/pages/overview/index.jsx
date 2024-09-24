import { memo } from 'react';
import styled from "styled-components";
import { overviewConst as CONST } from "./constants.jsx";
import { Column, Paragraph, Row, SplitScreen, Subheading } from "../../atoms";
import { PageTitle } from "../../molecules";
import { MapView } from '../../organisms';
import { Page } from '../../templates';
import KeyHighlights from '../../../assets/keyHighlights.svg'
import Download from '../../../assets/download-icon.svg'
import { OverviewCarousel } from "../../organisms/overviewCarousel";
import { Style as S } from '../../util';
import IconButton from "../../molecules/iconButton";
import { Wrapper } from "./styles.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";
import { Media } from "../../util/Media.jsx";

function Overview(props) {
    const isMobile = useMobile();

    return (
        <Page
            $bgPrimary
            $pageRef={props.$pageRef}
        >
            <Column
                $paddingInline={isMobile ? 16 : 32}
                $paddingBlock={64}
                $gap={32}
            >
                <PageTitle $secondary>
                    {CONST.titleTxt}
                </PageTitle>
                <SplitScreen $paddingBottom={70} $gap={32}>
                    <Column
                        $width={608}
                        $gap={16}
                    >
                        <Subheading $mobileHidden>
                            {CONST.subtitleTxt}
                        </Subheading>
                        <Paragraph $fontSize={20} $opacity={0.5}>
                            {CONST.paragraphTxt[0]}
                        </Paragraph>
                        <Paragraph $fontSize={20} $opacity={0.5}>
                            {CONST.paragraphTxt[1]}
                        </Paragraph>

                        <Wrapper $mobileHidden>
                            <Paragraph $fontSize={20} $opacity={0.5}>
                                {CONST.paragraphTxt[2]}
                            </Paragraph>
                            <ul style={{ listStyle: "none", paddingLeft: "10px", marginBlock: "10px", gap: "10px" }} >
                                {CONST.paragraphBullets.map((bullet, i) => {
                                    return (
                                        <li key={i} style={{ color: "black", marginBlock: "10px" }}>
                                            <Paragraph
                                                $fontSize={20}
                                                $opacity={0.5}
                                                $weight={400}
                                                $lineHeight={26.94}
                                            >
                                                {bullet}
                                            </Paragraph>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Wrapper>
                    </Column>
                    <Column $gap={64}>
                        <Column
                            $width={704}
                            $gap={16}
                        >
                            <Row $gap={8}>
                                <KeyHighlights />
                                <Subheading>
                                    {CONST.subtitleTxtRight}
                                </Subheading>
                            </Row>

                            <StyledUl>
                                {CONST.details.map((detail) => {
                                    return (
                                        <ListItem
                                            key={detail.label}
                                            label={detail.label}
                                            value={detail.value}
                                        />
                                    );
                                })}
                            </StyledUl>
                            <a
                                href={CONST.assets.pdfDownload}
                                download="FloorPlan"
                                target='_blank'
                                style={{
                                    all: 'unset',
                                    display: 'inline-block',
                                    width: '100%',
                                    height: '100%',
                                    background: ''
                                }}
                            >
                                <IconButton
                                    $height={40}
                                    $iconWidth={24}
                                    $iconHeight={24}
                                    $fillParent
                                    $primary
                                    icon={Download}
                                    text={CONST.buttonTxt}
                                />
                            </a>

                        </Column>
                        <Column $gap={8} $mobileHidden>
                            <Row $gap={8}>
                                <CONST.assets.locationIcon />
                                <Subheading>
                                    {CONST.imgTitle}
                                </Subheading>
                            </Row>
                            <MapView />
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
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    margin: 0;
    list-style: none;

    ${Media.md`
        -webkit-columns: 1;
    -moz-columns: 1;
    columns: 1;
    `};
`

const StyledLi = styled.li`
    padding: 0;
    margin: 0 0 ${S.height(8)}vh 0;
    height: fit-content;
`

const ListItem = (props) => {
    return (
        <StyledLi>
            <Row $gap={8}>
                <Paragraph $fontSize={20} $weight={600} $lineHeight={26.94}>
                    {props.label}
                </Paragraph>
                <Paragraph $fontSize={20} $weight={500} $opacity={0.5} $lineHeight={26.94}>
                    {props.value}
                </Paragraph>
            </Row>
        </StyledLi>
    );
}

export default memo(Overview);
