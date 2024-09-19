import { memo, useState } from 'react';
import { Container, HoverWrapper, ModalWrapper, Wrapper } from "./styles";
import { overlayConst as CONST } from './constants'
import { Image } from '../../atoms'
import downloadPdf from '../../../assets/samplePdf';

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
            <ModalWrapper
                $yPos={modal.yPos}
                $xPos={modal.xPos}
                $height={modal.modal.img !== undefined ? modal.modal.img.height : 0 }
                $yOffset={modal.boundary.height}
                $hover={hover}
                $active={modal.active}
                $isUp={modal.modal !== undefined ? modal.modal.isUp : false}
            >
                {
                    modal.active &&
                    modal.modal.img !== undefined
                    ? 
                        <img src={modal.modal.img.src} alt={modal.modal.img.alt} /> 
                        <ButtonWrapper>
                            <a href={downloadPdf} download="TestFloorPlan" target='_blank' />
                        </ButtonWrapper>
                    : <></> 
                }
            </ModalWrapper>
        </>

    );
}

export default memo(AvailabilityOverlay);
