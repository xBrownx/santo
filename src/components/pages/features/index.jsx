import { forwardRef, memo } from 'react';
import { Page } from '../../templates';
import { Column } from "../../molecules/column/index.jsx";
import { PageHeading } from "../../molecules/index.jsx";
import { Paragraph } from "../../atoms/paragraph/index.jsx";
import { features as CONST } from '../../../constants'
import { Row } from "../../molecules/row/index.jsx";

import img from '../../../assets/Features-Placeholder.png'
const Features = memo(
    forwardRef(
        function () {
            return (
                <Page $bgPrimary

                >
                    <Column padding={{ top: 80, left: 32 }}>
                        <PageHeading $primary>{CONST.headingTxt}</PageHeading>
                        <Paragraph>{CONST.paragraphTxt}</Paragraph>
                    </Column>
                    <Row>
                        <img src={img} alt={CONST.headingTxt} />
                        <Paragraph>{CONST.features.truckAccess.label}</Paragraph>
                    </Row>
                    <Row>
                        <img src={img} alt={CONST.headingTxt} />
                        <Paragraph>{CONST.features.truckAccess.label}</Paragraph>
                    </Row>
                    <Row>
                        <img src={img} alt={CONST.headingTxt} />
                        <Paragraph>{CONST.features.truckAccess.label}</Paragraph>
                    </Row>
                </Page>
            );
        }
    )
);

export default Features;