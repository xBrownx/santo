import { memo } from 'react'
import { ButtonSpecial } from '../../atoms';
import { Container } from './styles';
import { Row } from "../row/index.jsx";

export const ButtonArray = memo(
    function ButtonArray(props) {
        return (
            <Container {...props}>
                <Row gap={22}>
                    <ButtonSpecial {...props}>
                        1
                    </ButtonSpecial>
                    <ButtonSpecial $inActive {...props}>
                        2
                    </ButtonSpecial>
                    <ButtonSpecial {...props}>
                        3
                    </ButtonSpecial>
                    <ButtonSpecial $inActive {...props}>
                        4
                    </ButtonSpecial>
                </Row>
                <p><br/></p>
                <Row gap={22}>
                    <ButtonSpecial {...props}>
                        1
                    </ButtonSpecial>
                    <ButtonSpecial $inActive {...props}>
                        2
                    </ButtonSpecial>
                    <ButtonSpecial {...props}>
                        3
                    </ButtonSpecial>
                    <ButtonSpecial $inActive {...props}>
                        4
                    </ButtonSpecial>
                </Row>
            </Container>
        );
    }
);
