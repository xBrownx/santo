import { memo } from 'react';
import { Container, StyledImg, StyledParagraph } from './styles';
import { Column, Row } from '../../atoms';


function Agent(props) {
    const { name, phone, photo } = props;
    return (
        <Container >
            <Row $gap={8}>
                <StyledImg src={photo} alt={""} />
                <Column $centre>
                    <StyledParagraph>
                        {name}
                    </StyledParagraph>
                    <StyledParagraph>
                        {phone}
                    </StyledParagraph>
                </Column>
            </Row>
        </Container>
    );
}

export default memo(Agent);
