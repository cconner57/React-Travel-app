import React from 'react';
import './Home.scss';

const Guide = ({ title, src, alt }) => {
	return (
		<div className='Guide__Item'>
			<h5>{title}</h5>
			<img src={src} alt={alt} />
		</div>
	);
};

export default Guide;
