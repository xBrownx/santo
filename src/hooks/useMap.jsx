import { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { initMap } from '../components/utils/initMap';

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
}
