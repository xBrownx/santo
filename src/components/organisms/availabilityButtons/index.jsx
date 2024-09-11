import { memo } from 'react'
import { NumberButton } from '../../atoms';
import { Container } from './styles';

export const AvailabilityButtons = memo(
    function AvailabilityButtons(props) {
        return (
            <Container {...props}>
                <NumberButton {...props} />
            </Container>
        );
    }
);
