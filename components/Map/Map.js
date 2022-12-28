import React from 'react'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import "leaflet/dist/images/marker-shadow.png";
import image from '../../public/assets/images/marker-icon.png'
import image1 from '../../public/assets/images/marker-shadow.png'
// import L from 'leaflet'

const Map = () => {
  // const mad= L.icon({
  //   iconUrl: image,
  //   iconSize: [38, 95],
  //   iconAnchor: [22, 94],
  //   popupAnchor: [-3, -76],
  //   shadowUrl: image1,
  //   shadowSize: [68, 95],
  //   shadowAnchor: [22, 94]
  // }) 
  return (
    <MapContainer className='rounded-2xl' center={[51.505, -0.09]} zoom={13} style={{height:"300px"}} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]} >
    <Popup>
     LaserKopf Capital
    </Popup>
    sadasdasd
  </Marker>
</MapContainer>
  )
}

export default Map