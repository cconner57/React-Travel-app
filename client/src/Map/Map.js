import React, { useState } from 'react';
import { Map, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.scss'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const USMap = () => {
	const [markers, setMarkers] = useState([]);
	const [showPopup, setShowPopup] = useState(false);

	const outer = [
		[52, -127], //Northwest
		[52, -100], //North
		[52, -65], //Northeast
		[40, -65], //East
		[23, -65], //Southeast
		[23, -100], //South
		[23, -127], //Southwest
		[40, -127], //West
	];

	const createMarker = (e) => {
		console.log(e);
		setMarkers((prevMarkers) => [
			...prevMarkers,
			{ latlon: [e.latlng.lat, e.latlng.lng], zoom: e.target._zoom },
		]);
		setShowPopup(true);
	};

	return (
		<div className='leaflet-container'>
			{showPopup && <MarkerPopup />}
			<Map
				center={[39, -97]}
				zoom={5}
				zoomControl={false}
				maxBounds={outer}
				className='Map'
				onClick={createMarker}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>

				{markers.map((marker, key) => (
					<Marker key={key} position={marker.latlon}>
						<Popup>Plan: See monuments</Popup>
					</Marker>
				))}
				<ZoomControl position='bottomright' />
			</Map>
		</div>
	);
};

export default USMap;
