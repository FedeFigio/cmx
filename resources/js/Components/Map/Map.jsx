import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const position = [42.504154, 12.646361];
const Map = ({ data }) => {

    const renderMarkers = () => {

        return data.map((track) => {
            return (
                <Marker key={track.id} position={[track.latitude, track.longitude]}>
                    <Popup>
                       {track.name} <br /> Easily customizable.
                    </Popup>
                </Marker>
            )
        })
    }
    return (
        <MapContainer style={{ height: '100%', width: '100%' }} center={position} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
     {renderMarkers()}
        </MapContainer>


    )

};

export default Map;
