import { memo } from 'react';
import { Column, Row } from '../../atoms';
import { LinkSubtitle, Agent } from '../../molecules';

function AgencyAgents(props) {
    const { agencyName, agents } = props;
    return (
        <Column $gap={32}>
            <LinkSubtitle>
                {agencyName}
            </LinkSubtitle>
            <Row $gap={32}>
                {agents.map((agent) => {
                    return (
                        <Agent 
                            key={agent.id}
                            name={agent.name}
                            phone={agent.phone}
                            photo={agent.photo}
                        />
                    );
                })}
            </Row>
        </Column>
    );
}

export default memo(AgencyAgents);
