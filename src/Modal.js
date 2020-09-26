import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import './App.scss'

const Modal = ({ onClose, children }) => {
	useEffect(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
    }, []);
    
    const handleOutsideClick = (e) => {
        const outsideForm = document.querySelector('.Modal-Container')
        if(e.target === outsideForm) onClose()
    }

	return ReactDom.createPortal(
		<div className='Modal-Container'>
			{children}
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
