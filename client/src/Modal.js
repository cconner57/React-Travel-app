import React, { useEffect, useCallback } from 'react';
import ReactDom from 'react-dom';
import './App.scss';

const Modal = ({ onClose, children }) => {
	const handleOutsideClick = useCallback((e) => {
		const outsideForm = document.querySelector('.Modal-Container');
		if (e.target === outsideForm) onClose();
	}, [onClose]);

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return ReactDom.createPortal(
		<div className='Modal-Container'>{children}</div>,
		document.getElementById('modal')
	);
};

export default Modal;
