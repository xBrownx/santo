import { memo } from 'react'

import { Heading } from '../../atoms';
import { Container } from './styles';


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


export default memo(PageHeading);
