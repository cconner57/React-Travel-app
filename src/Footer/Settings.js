import React from 'react';
import { useHistory } from 'react-router-dom';
import './Footer.scss';

const Settings = () => {
	let history = useHistory();

	let back = (e) => {
		e.stopPropagation();
		history.goBack();
	};

	return (
		<div className='Settings'>
			<p className='Close' onClick={back}>
				&#x2715;
			</p>
			<div className='Settings__Roadmap'>
				<h1>Feature Roadmap</h1>
				<ul>
					<li>Reply function in discussions</li>
					<li>Skeleton Loading</li>
					<li>Delete markers on map</li>
					<li>Delete/Edit post</li>
					<li>Lazy loading for images</li>
					<li>Add Accessibility</li>
					<li>Loading animation between pages</li>
					<li>Dark Mode</li>
					<li>Group markers by custom categories</li>
					<li>Forgot password</li>
					<li>Store feature</li>
					<li>Sign In with Google, Facebook, Apple</li>
				</ul>
			</div>
			<h1>Leaflet for Mapping</h1>
		</div>
	);
};

export default Settings;
