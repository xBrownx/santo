import { StyledHeading } from "./styles";
import { memo } from "react";

export const Heading = memo(function Heading(props) {
    return (
        <StyledHeading {...props}>
            {props.children}
        </StyledHeading>
    );
});
