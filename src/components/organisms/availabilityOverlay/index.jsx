import { memo, useState } from 'react';
import { Container, ModalWrapper, VectorWrapper, Wrapper } from "./styles.jsx";
import { overlayConst as CONST } from './constants.jsx'

function AvailabilityOverlay() {

    return (
        <Container>
            {CONST.modals.map(modal => {
                return (
                    <ModalVector key={modal.warehouse} modal={modal} />
                );
            })}
        </Container>
    );
}

const ModalVector = (props) => {
    const modal = props.modal;
    const [hover, isHover] = useState(false);
    return (
        <div
            onMouseEnter={() => isHover(true)}
            onMouseLeave={() => isHover(false)}
        >
            <Wrapper
                $width={modal.width}
                $height={modal.height}
                $yPos={modal.yPos}
                $xPos={modal.xPos}
                $hover={hover}
            >
                <ModalWrapper>
                    <modal.Modal id={"modal"} />
                </ModalWrapper>

                <modal.Overlay id={"vector"} />

            </Wrapper>
        </div>
    );
}

export default memo(AvailabilityOverlay);
