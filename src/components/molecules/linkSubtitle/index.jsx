import { memo } from 'react';
import { Container } from './styles';
import { Subheading } from '../../atoms';

function LinkSubtitle(props) {
    return (
        <Container>
            <Subheading>
                {props.children}
            </Subheading>
            openIcon
        </Container>        
    );
}

export default memo(LinkSubtitle);
