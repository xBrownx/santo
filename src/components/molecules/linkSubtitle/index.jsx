import { memo } from 'react';
import Open from '../../../assets/open_in_new.svg?component'
import { Row, Subheading } from '../../atoms';
import { Container } from "./styles.jsx";

function LinkSubtitle(props) {
    return (
        <Row $gap={8} $pointer $fitContent>
            <Subheading $underline>
                {props.children}
            </Subheading>
            <Container>
                <Open />
            </Container>

        </Row>
    );
}

export default memo(LinkSubtitle);
