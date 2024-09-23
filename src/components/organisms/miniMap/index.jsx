import { memo } from 'react';
import { Container } from './styles';
import { useMap } from '../../../hooks/useMap';

function MapView(props) {
    const mapRef = useRef(null);
    useMap(mapRef);
  
    return (
        <Container>
            <div ref={mapRef} id='map-container' />
        </Container>
    );
}

export default memo(MapView);
