import React, { useState, useEffect } from 'react';
import Guide from './Guide';
import video from './background-video.mp4';
import './Home.scss';

const Main = () => {
	const [hide, handleBox] = useState(false);
	const [content, setContent] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			localStorage.setItem('hasLoaded', true);
		}, 5000);
	}, []);

	const box = document.querySelector('.Landing__Box');

	const hideTip = () => {
		if (window.scrollY > 125) {
			handleBox(true);
		} else handleBox(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', hideTip);
		return () => {
			window.removeEventListener('scroll', hideTip);
		};
	}, []);

	useEffect(() => {
		const text = ['Travel', ' Plan', ' Explore'];
		const interval = setTimeout(() => {
			text.forEach((word, i) => {
				setTimeout(() => {
					setContent((prevWord) => [...prevWord, word]);
				}, i * 1500);
			});
		}, 1500);
		return () => {
			clearTimeout(interval);
		};
	}, []);

	return (
		<>
			{loading && !localStorage.getItem('hasLoaded') ? (
				<>
					<img
						className='Loading'
						src='/Images/Home/earth-loading.svg'
						alt='loading...'
					/>
				</>
			) : (
				<>
					<div className='Landing'>
						<video
							className='Landing__Background'
							src={video}
							loop
							muted
							autoPlay></video>
						<h5 className='Landing__Caption'>{content}</h5>
						<div
							className={`Landing__Box ${
								hide && box.classList.add('HideBox')
							}`}>
							<p>See More</p>
							<img
								className='Arrow'
								src='./Images/Home/down-arrow.png'
								alt='See More'
							/>
						</div>
					</div>
					<Guide />
				</>
			)}
		</>
	);
};

export default Main;
