import React, { useEffect, useCallback } from 'react';
import ReactDom from 'react-dom';
import { useHistory } from 'react-router-dom';
import './App.scss';

const Modal = ({ children }) => {
	let history = useHistory();

	const handleOutsideClick = useCallback(
		(e) => {
			const outsideForm = document.querySelector('.Modal');
			if (e.target === outsideForm) history.goBack();
		},
		[history]
	);

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return ReactDom.createPortal(
		<div className='Modal'>{children}</div>,
		document.getElementById('modal')
	);
};

export default Modal;
