import { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { initMap } from '../components/utils/initMap';
import { generateNewMarker } from '../utils/generateNewMarker';

export const useMap = (container) => {

    const mapInitRef = useRef(null);

    useEffect(() => {
        if (container.current) {

            mapInitRef.current = initMap(
                container.current,
                [-100.31019063199852, 25.66901932031443]
            );

        }
    }, []);

    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on('load', () => generateNewMarker({ map, ...mapInitRef.current!.getCenter() }))

        return () => { mapInitRef.current?.off('load', generateNewMarker) }
    }, [])
}
