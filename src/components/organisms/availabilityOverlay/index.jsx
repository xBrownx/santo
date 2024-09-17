import { memo, useState } from 'react';
import { Container, HoverWrapper, Wrapper } from "./styles";
import { overlayConst as CONST } from './constants'

function AvailabilityOverlay() {
    return (
        <Container>
            {CONST.modals.map(modal => {
                return (
                    <ModalVector
                        key={modal.warehouse}
                        modal={modal}
                    />
                );
            })}
        </Container>
    );
}

const ModalVector = (props) => {
    const modal = props.modal;
    const Vector = modal.vector.Src;
    const [hover, setIsHover] = useState(false);

    return (
        <>
            <HoverWrapper
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                $width={modal.boundary.width}
                $height={modal.boundary.height}
                $yPos={modal.yPos}
                $xPos={modal.xPos}
            />
            <Wrapper
                $width={modal.vector.width}
                $height={modal.vector.height}
                $yPos={modal.yPos}
                $xPos={modal.xPos}
                $hover={hover}
                $active={modal.active}
            >
                <Vector />
            </Wrapper>
        </>
    );
}

export default memo(AvailabilityOverlay);
