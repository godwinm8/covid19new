import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




interface CovidMapProps {
    cases: { name: string; lat: number; lon: number; totalCases: number }[];
}

const CovidMap: React.FC<CovidMapProps> = ({ cases }) => {
    const bounds = cases.map(state => [state.lat, state.lon]);

    const MapZoomControl = () => {
        const map = useMap();

        useEffect(() => {
            map.scrollWheelZoom.disable();
            return () => {
                map.scrollWheelZoom.enable(); // Enable on unmount
            };
        }, [map]);

        return null; // This component doesn't render anything
    };

    return (
        <MapContainer bounds={bounds} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // You can remove the attribution line as it causes the error
            />
            <MapZoomControl />
            {cases.map((state, idx) => (
                <Marker key={idx} position={[state.lat, state.lon]}>
                    <Popup>
                        {state.name}: {state.totalCases} cases
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default CovidMap;
