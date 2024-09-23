import { useEffect, useRef } from 'react';
import { initMap } from '../components/util/initMap';
import { generateNewMarker } from '../components/util/generateMarker';

export const useMap = (container) => {

    const mapInitRef = useRef(null);

    useEffect(() => {
        if (container.current) {
            mapInitRef.current = initMap(
                container.current,
                [138.5136602, -34.8419509]
            );

        }
    }, []);

    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on('load', () => generateNewMarker({lng: 138.5136602, lat: -34.8419509, map: mapInitRef.current} ))

        return () => { mapInitRef.current?.off('load', generateNewMarker) }
    }, [])
}
