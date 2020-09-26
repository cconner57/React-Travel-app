import React, { useState, useEffect } from 'react';
import './Home.scss'

const Main = () => {
	const [hide, handleBox] = useState(false);
	const [content, setContent] = useState([]);

	const box = document.querySelector('.Landing__Box');
	const text = ['Travel', ' Plan', ' Explore'];

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
		setTimeout(() => {
			text.forEach((word, i) => {
				setTimeout(() => {
					setContent((prevWord) => [...prevWord, word]);
				}, i * 2000);
			});
		}, 2000);
	}, []);

	return (
		<div className='Landing'>
			<video className='Landing__Background' loop muted autoPlay>
				<source src='./background-video.mp4' type='video/mp4' />
			</video>
			<h5 className='Landing__Caption'>{content}</h5>
			<div className={`Landing__Box ${hide && box.classList.add('HideBox')}`}>
				<p>See More</p>
				<img className='Arrow' src='./down-arrow.png' alt='See More' />
			</div>
		</div>
	);
};

export default Main;
