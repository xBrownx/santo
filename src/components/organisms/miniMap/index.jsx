import { memo, useRef } from 'react';
import { Container } from './styles';
import { useMap } from '../../../hooks/useMap';

function MapView(props) {
    const mapRef = useRef(null);
    useMap(mapRef);
  
    return (
        <Container ref={mapRef} />
    );
}

export default memo(MapView);
