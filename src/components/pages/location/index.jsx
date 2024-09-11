import { forwardRef, memo } from 'react';
import { Page } from '../../templates';

import { PageHeading } from "../../molecules/index.jsx";
import { Row } from "../../molecules/row/index.jsx";
import { Container } from "../../molecules/container/index.jsx";
import { Column } from "../../molecules/column/index.jsx";
import { Paragraph } from "../../atoms/paragraph/index.jsx";
import { Button } from "../../atoms/button/index.jsx";
import img from "../../../assets/Location-Hero.png"

const location = memo(
    forwardRef(
        function () {
            return (
                <Page $bgSecondary>
                    <Row paddingInlineBlock={{ inline: 32 }}>
                        <Container width={554}>
                            <Column gap={32}>
                                <PageHeading>
                                    LOCATION
                                </PageHeading>
                                <Paragraph
                                    size={18}
                                    lineHeight={26.94}
                                >
                                    Iaculis blandit arcu vestibulum mauris at sapien auctor feugiat non. Pellentesque
                                    nec vitae adipiscing metus in.<br /><br />
                                    Non mattis sit pulvinar sed lacus commodo. Lorem eros magna faucibus dui leo
                                    scelerisque
                                    odio arcu ut. Semper in elementum risus a odio viverra ipsum convallis.
                                </Paragraph>
                                <Button $fillParent>
                                    v Floor Plan
                                </Button>
                            </Column>
                        </Container>
                        <Container widthPc={100}>
                            <img src={img} alt="location" />
                        </Container>
                    </Row>
                </Page>
            );
        }
    )
);

export default location;