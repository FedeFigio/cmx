import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Link } from '@inertiajs/react';

const centerPosition = [42.504154, 12.646361];
const Map = ({ data, zoom = 4, center = centerPosition, isDetail = false }) => {
    console.log(window.location);
    const renderMarkers = () => {

        return data.map((track) => {
            return (
                <Marker key={track.id} position={[track.latitude, track.longitude]}>
                    <Popup>
                        {track.name} <br />
                        <div className='d-flex gap-1'>

                            {!isDetail && <Link href={route("tracks.show", { track: track.id })}>Vai al dettaglio</Link>}


                            <a href={`https://www.google.com/maps?q=${track.latitude},${track.longitude}`} target='_blank' rel="noopener noreferrer">Apri su maps</a>

                        </div>
                    </Popup>
                </Marker>
            )
        })
    }
    return (
        <MapContainer style={{ height: '100%', width: '100%' }} center={center} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {renderMarkers()}
        </MapContainer>


    )

};

export default Map;
