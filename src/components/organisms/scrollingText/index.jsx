import { memo } from "react";
import { Container, Heading } from "./styles";
import { ScrollingCarousel } from "../../molecules/scrollingCarousel";
import { HeadingSplit } from "./headingSplit";

export const ScrollingText = memo(
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
);

