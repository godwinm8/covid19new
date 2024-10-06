import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface CovidMapProps {
  cases: {
    name: string;
    latitude: number;
    longitude: number;
    totalCases: number;
  }[];
}

const CovidMap: React.FC<CovidMapProps> = ({ cases }) => {
  // Get map bounds based on the states' latitude and longitude
  const bounds = cases.map(
    (state) => [state.latitude, state.longitude] as [number, number]
  );

  const MapZoomControl = () => {
    const map = useMap();

    useEffect(() => {
      // Disable scroll zoom on mount
      map.scrollWheelZoom.disable();

      return () => {
        // Re-enable scroll zoom on unmount
        map.scrollWheelZoom.enable();
      };
    }, [map]);

    return null; // This component is only for zoom control and renders nothing
  };

  return (
    <MapContainer
      center={[20.5937, 78.9629]} // Center of India as default
      zoom={5}
      bounds={bounds.length ? bounds : undefined} // Fit bounds if available
      style={{ height: "500px", width: "100%" }} // Adjust the map size
      scrollWheelZoom={false} // Start with disabled scroll zoom
    >
      {/* Add zoom control */}
      <MapZoomControl />

      {/* TileLayer for map display */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Render markers for each state */}
      {cases.map((state, index) => (
        <Marker key={index} position={[state.latitude, state.longitude]}>
          <Popup>
            <strong>{state.name}</strong>
            <br />
            Total Cases: {state.totalCases}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;
