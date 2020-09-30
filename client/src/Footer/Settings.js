import React from 'react';
import './Footer.scss'

const Settings = ({ onClose }) => {
	return (
		<div className='Settings-Container'>
			<p className='Close' onClick={onClose}>
				&#x2715;
			</p>
			<h1>Dark Mode (Coming Soon)</h1>
			<h1>Leaflet for Mapping</h1>
			<div>
				<h1>Feature Roadmap</h1>
				<p>Add loading screen</p>
				<p>Add reply function in discussions</p>
				<p>Remove markers on map</p>
				<p>Group markers by custom categories</p>
			</div>
		</div>
	);
};

export default Settings;
