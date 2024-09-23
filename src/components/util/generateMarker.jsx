import { Marker, Map } from 'mapbox-gl';

export const generateNewMarker = ({ lat, lng, map }) => {

    new Marker({ color: '#4160AE', scale: 1 })
        .setLngLat([lng, lat])
        .addTo(map)
}
