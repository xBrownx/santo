import { Map } from 'mapbox-gl';

export const initMap = (container, coords) => {

    return new Map({
        container,
        style: '',
        pitchWithRotate: false,
        center: coords,
        zoom: 15,
        accessToken: '',
        doubleClickZoom: false
    });
}
