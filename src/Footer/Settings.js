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
		</div>
	);
};

export default Settings;
