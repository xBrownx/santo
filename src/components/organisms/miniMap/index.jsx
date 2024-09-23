import { memo, useRef, useEffect } from 'react';
import { Container } from './styles';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl-css';

function MiniMap(props) {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
      mapboxgl.accessToken = '';
      mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
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
