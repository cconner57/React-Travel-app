import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMarkers, newMarker } from '../ReduxActions/markerActions';
import { Map, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet';
import MarkerPopup from './MarkerPopup';
import LoginError from '../Login-Signup/LoginError';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import './Map.scss';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const USMap = () => {
	const [markers, setMarkers] = useState(null);
	const [showPopup, setShowPopup] = useState(false);
	const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem('userInfo')))
	const markerData = useSelector((state) => state.markerReducer.data);
	const loggedIn = sessionStorage.getItem('loggedIn');
	// const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
	const dispatch = useDispatch();

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

	const placeMarker = (e) => {
		setMarkers({
			date: '',
			plans: '',
			latlon: [e.latlng.lat, e.latlng.lng],
			zoom: e.target._zoom,
			user: userInfo.id,
		});
		setShowPopup(true);
	};

	const handleChange = (e) => {
		setMarkers({ ...markers, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		const getMarkers = async () => {
			try {
				const response = await axios.get(
					'https://travel-buddy1.herokuapp.com/bucket-list',
					{
						params: {
							ID: userInfo.id,
						},
					}
				);
				dispatch(fetchMarkers(response.data.data.markers));
			} catch (error) {
				console.log(error);
			}
		};
		if (loggedIn) {
			getMarkers();
		}
	}, [dispatch, loggedIn, markers, userInfo]);

	const createMarker = async () => {
		try {
			const response = await axios.post(
				'https://travel-buddy1.herokuapp.com/bucket-list',
				{
					date: markers.date,
					plans: markers.plans,
					location: markers.latlon,
					zoom: markers.zoom,
					user_id: markers.user,
				}
			);
			dispatch(newMarker(response.data.data.markers));
		} catch (error) {
			console.log(error);
		}
		setShowPopup(false);
		setMarkers();
	};

	const toArray = (str) => {
		const newArray = [];
		const lat = str.slice(2).split(',');
		const lon = lat[1].slice(1);
		newArray.push(parseFloat(lat[0]), parseFloat(lon));
		return newArray;
	};

	return (
		<div className='leaflet-container'>
			{!loggedIn && <LoginError />}
			{showPopup && (
				<MarkerPopup
					handleChange={handleChange}
					marker={markers}
					createMarker={createMarker}
				/>
			)}
			<Map
				center={[39, -97]}
				zoom={5}
				zoomControl={false}
				maxBounds={outer}
				className='Map'
				onClick={placeMarker}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{markers && (
					<Marker position={markers.latlon}>
						<Popup className='Map__Popup'>
							<h5>Date: {markers.date}</h5>
							<h5>Plan: {markers.plans}</h5>
						</Popup>
					</Marker>
				)}
				{markerData &&
					markerData.map((marker, key) => (
						<Marker key={key} position={toArray(marker.location)}>
							<Popup className='Map__Popup'>
								<h5>Date: {marker.date}</h5>
								<h5>Plan: {marker.plans}</h5>
							</Popup>
						</Marker>
					))}
				<ZoomControl position='bottomright' />
			</Map>
		</div>
	);
};

export default USMap;
