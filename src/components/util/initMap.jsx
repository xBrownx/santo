import { Map } from 'mapbox-gl';


export const initMap = (container, coords) => {

    return new Map({
        container,
        style: 'mapbox://styles/replika/cm17bfr56055t01pq29ntef7l',
        pitchWithRotate: false,
        center: coords,
        zoom: 12,
        accessToken: 'pk.eyJ1IjoicmVwbGlrYSIsImEiOiJjbHBkOHg2b3gwN2EwMndvMDQzM3E1eWJjIn0.USHzjpdpz_TGiR6XuwuVTw',
    });
}
