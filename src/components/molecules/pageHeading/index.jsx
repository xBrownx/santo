import { memo } from 'react'
import { Container } from './styles';
import { Heading } from '../../atoms';

function PageTitle(props) {
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


export default memo(PageTitle);
