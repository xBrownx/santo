import { memo } from 'react';
import { Container } from './styles';
import { Row } from '../../atoms';
import { LinkSubtitle, Agent } from '../../molecules';

function AgencyAgents(props) {
    const { agencyName, agents } = props;
    return (
        <Container>
            <LinkSubtitle>
                {agencyName}
            </LinkSubtitle>
            <Row>
                {agents.map((agent) => {
                    return (
                        <Agent 
                            key={agent.id}
                            name={agent.name}
                            phone={agent.phone}
                        />
                    );
                })}
            </Row>
        </Container>  
    );
}

export default memo(AgencyAgents);
