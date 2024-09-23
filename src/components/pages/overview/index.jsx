import { memo } from 'react';
import styled from "styled-components";
import { overviewConst as CONST } from "./constants.jsx";
import { Column, Image, Paragraph, Row, SplitScreen, Subheading } from "../../atoms";
import { PageTitle } from "../../molecules";
impoer { MapView } from '../../organisms';
import { Page } from '../../templates';
import KeyHighlights from '../../../assets/keyHighlights.svg'
import Download from '../../../assets/download-icon.svg'
import { OverviewCarousel } from "../../organisms/overviewCarousel";
import { Style as S } from '../../util';
import IconButton from "../../molecules/iconButton";

function Overview(props) {

    return (
        <Page
            $bgPrimary
            $pageRef={props.$pageRef}
        >
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
                        $width={608}
                        $gap={16}
                    >
                        <Subheading>
                            {CONST.subtitleTxt}
                        </Subheading>
                        <Paragraph $fontSize={20} $opacity={0.5}>
                            {CONST.paragraphTxt[0]}
                        </Paragraph>
                        <div style={{width: "100%"}}>
                            <Paragraph $fontSize={20} $opacity={0.5}>
                                {CONST.paragraphTxt[1]}
                            </Paragraph>
                            <ul style={{listStyle: "none", paddingLeft: "10px", marginBlock: "0"}}>
                                {CONST.paragraphBullets.map((bullet, i) => {
                                    return (
                                        <li key={i} style={{color: "black"}}>
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
                        </div>
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
                                style={{ all: 'unset', display: 'inline-block', width: '100%', height: '100%', background: '' }}
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
                        <Column $gap={8}>
                            <Row $gap={8}>
                                <CONST.assets.locationIcon />
                                <Subheading>
                                    {CONST.imgTitle}
                                </Subheading>
                            </Row>
                            <MapView />
                            { */ <Image {...CONST.assets.img} /> */ }
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
