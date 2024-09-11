import { memo } from 'react'

import { Heading } from '../../atoms';
import { Container } from './styles';

export const PageHeading = memo(
    function PageHeading(props) {
        return (
            <Container>
                <Heading
                    size={96}
                    lineHeight={100}
                    {...props}
                >
                    {props.children}
                </Heading>
            </Container>
        );
    }
);
