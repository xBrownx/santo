import { memo } from 'react';
import { Container, StyledImg } from './styles';
import { Column, Row } from '../../atoms';

function Agent(props) {
    const { name, phone } = props;
    return (
        <Container>
            <Row>
                {/*<StyledImg src={photo.src} alt={photo.alt} />*/}
                <Column>
                    {name}
                    {phone}
                </Column>
            </Row>
        </Container>
    );
}

export default memo(Agent);
