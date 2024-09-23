import { memo } from "react";
import { Container, Heading } from "./styles";
import { ScrollingCarousel } from "../../molecules/";
import { HeadingSplit } from "./headingSplit";


function ScrollingText() {
    return (
        <Container>
            <ScrollingCarousel>
                <HeadingSplit>
                    1837 BUSINESS PARK 1837 BUSINESS PARK
                </HeadingSplit>
                <Heading>&nbsp;</Heading>
            </ScrollingCarousel>
        </Container>
    );
}

export default memo(ScrollingText);

