import { Marker, Map } from 'mapbox-gl';

export const generateNewMarker = ({ lat, lng, map }) => {

    new Marker({ color: '#63df29', scale: 1.5 })
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(map)
}
