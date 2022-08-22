import React from 'react';
import { Map as LeafletMap, MapProps as LeafletMapProps, Marker, Popup, TileLayer } from 'react-leaflet'
//Map as LeafletMap
//MapProps as LeafletMapProps
interface MapProps extends LeafletMapProps {
  interactive?: boolean
  children: React.ReactNode
}

export default function Map({ children, interactive = true, ...props }: MapProps) {
  return (
    <LeafletMap
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_REACT_APP_MAPBOX_TOKEN}`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <Marker position={[40.8054, -74.0241]} draggable={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </LeafletMap>

    // <LeafletMap
    //   center={{ lat: -23.55386927083221, lng: -46.66239774232902 }}
    //   zoom={15}
    //   dragging={interactive}
    //   touchZoom={interactive}
    //   zoomControl={interactive}
    //   scrollWheelZoom={interactive}
    //   doubleClickZoom={interactive}
    //   {...props}
    // >
    //   <TileLayer
    //     url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_REACT_APP_MAPBOX_TOKEN}`}

    //   />
    //   {children}
    // </LeafletMap>
  );
}
//url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_REACT_APP_MAPBOX_TOKEN}`}
//style={{ width: '50%', height: '50%' }}
