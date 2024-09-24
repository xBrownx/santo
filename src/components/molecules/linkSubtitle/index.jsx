import { memo } from 'react';
import Open from '../../../assets/open_in_new.svg?component'
import { Row, Subheading } from '../../atoms';
import { Container, Wrapper } from "./styles.jsx";

function LinkSubtitle(props) {
    return (
        <Container>
            <Row
                $gap={8}
                $pointer
                $fitContent
            >
                <Subheading $underline $large>
                    {props.children}
                </Subheading>
                <Wrapper>
                    <Open />
                </Wrapper>
            </Row>
        </Container>
    );
}

export default memo(LinkSubtitle);
