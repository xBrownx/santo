import { memo } from 'react';
import { Container, Pane } from './styles';

export const SplitScreen = memo(

    function SplitScreen(props) {
        const { children } = props
        const [left, right] = children;
        return (
            <Container {...props}>
                <Pane>
                    {left}
                </Pane>
                <Pane>
                    {right}
                </Pane>
            </Container>
        );
    }
);


