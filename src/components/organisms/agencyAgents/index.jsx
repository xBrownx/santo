import { memo } from 'react';
import { Column } from '../../atoms';
import { LinkSubtitle, Agent } from '../../molecules';
import { Li, StyledUl } from "./styles.jsx";

function AgencyAgents(props) {
    const {agencyName, agents} = props;
    return (
        <Column $gap={32}>
            <LinkSubtitle>
                {agencyName}
            </LinkSubtitle>
            <StyledUl>
                {agents.map((agent) => {
                    return (
                        <Li key={agent.id}>
                            <Agent
                                name={agent.name}
                                phone={agent.phone}
                                photo={agent.photo}
                            />
                        </Li>
                    );
                })}
            </StyledUl>
        </Column>
    );
}



export default memo(AgencyAgents);
