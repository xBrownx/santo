import { memo } from "react";
import { Container, Heading } from "./styles";
import { ScrollingCarousel } from "../../molecules/";
import { HeadingSplit } from "./headingSplit";


function ScrollingText() {
    return (
        <Container>
            <ScrollingCarousel>
                <HeadingSplit>
                    8-18 santos parade • 8-18 santos parade • 8-18 santos parade
                </HeadingSplit>
                <Heading>&nbsp;</Heading>
            </ScrollingCarousel>
        </Container>
    );
}

export default memo(ScrollingText);

