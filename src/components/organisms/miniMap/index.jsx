import { memo, useRef, useEffect } from 'react';
import { Container } from './styles';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl-css';

function MiniMap(props) {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
      mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: '',
          accessToken: ''
      });

      return () => {
        mapRef.current.remove()
      }
  }, []);
  
    return (
        <Container>
            <div id='map-container' ref={mapContainerRef} />
        </Container>
    );
}

export default memo(MiniMap);
