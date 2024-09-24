import { memo } from 'react';
import { Column } from '../../atoms';
import { LinkSubtitle, Agent } from '../../molecules';
import { Li, StyledUl } from "./styles.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";

function AgencyAgents(props) {
    const isMobile = useMobile();
    const {agencyName, agents} = props;
    return (
        <Column $gap={isMobile ? 16 : 32}>
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
