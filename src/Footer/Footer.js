import React, { useState } from 'react';
import Modal from '../Modal';
import Safety from './Safety';
import Contact from './Contact';
import Settings from './Settings';
import './Footer.scss'

const Footer = () => {
	const [showSafety, setShowSafety] = useState(false);
	const [showContact, setShowContact] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	return (
		<footer className='Footer'>
			<p>Web Design + Development by Chris Conner</p>
			<div className='Footer__Links'>
				<p onClick={() => setShowSafety(true)}>Travel Safety</p>
				<p onClick={() => setShowContact(true)}>Contact</p>
				<p onClick={() => setShowSettings(true)}>Settings</p>
				{showSafety && (
					<Modal onClose={() => setShowSafety(false)}>
						<Safety onClose={() => setShowSafety(false)} />
					</Modal>
				)}
				{showContact && (
					<Modal onClose={() => setShowContact(false)}>
						<Contact onClose={() => setShowContact(false)} />
					</Modal>
				)}
				{showSettings && (
					<Modal onClose={() => setShowSettings(false)}>
						<Settings onClose={() => setShowSettings(false)} />
					</Modal>
				)}
			</div>
		</footer>
	);
};

export default Footer;
