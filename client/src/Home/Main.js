import React, { useState, useEffect } from 'react';
import Guide from './Guide';
import video from './background-video.mp4';
import './Home.scss';

const Main = () => {
	const [hide, handleBox] = useState(false);
	const [content, setContent] = useState([]);

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
			<div className='Landing'>
				{/* <video className='Landing__Background' loop muted autoPlay>
					<source src='./Images/Home/background-video.mp4' type='video/mp4' />
				</video> */}
				<video
					className='Landing__Background'
					src={video}
					loop
					muted
					autoPlay></video>
				<h5 className='Landing__Caption'>{content}</h5>
				<div className={`Landing__Box ${hide && box.classList.add('HideBox')}`}>
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
	);
};

export default Main;
