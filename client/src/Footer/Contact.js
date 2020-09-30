import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Footer.scss'

const Contact = ({ onClose }) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const { register, handleSubmit, errors } = useForm();

	const handleForm = () => {
		setIsSubmitted(true);
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	if (!isSubmitted) {
		return (
			<form
				className='Contact'
				onSubmit={(e) => e.preventDefault()}
				autoComplete='on'>
				<p className='Close' onClick={onClose}>
					&#x2715;
				</p>
				<div className='Contact__Heading'>
					<h4>Contact</h4>
					<h4>Us</h4>
				</div>
				<label htmlFor='given-name' className='Contact__Label'>Name</label>
				<input
					id='given-name'
					className='Contact__InputName'
					name='name'
					type='text'
					ref={register({
						required: { value: true, message: '• Name is required' },
						minLength: { value: 3, message: '• Name is too short' },
						maxLength: { value: 30, message: '• Name is too long' },
					})}
					onChange={handleChange}
				/>
				{errors.name && <p className='Error'>{errors.name.message}</p>}
				<label htmlFor='email' className='Contact__Label'>Email</label>
				<input
					id='email'
					className='Contact__InputEmail'
					name='email'
					type='email'
					ref={register({
						required: true,
						pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					})}
					onChange={handleChange}
				/>
				{errors.email && <p className='Error'>• Email must be valid</p>}
				<label htmlFor='message' className='Contact__Label'>Enter Message</label>
				<textarea
					className='Contact__InputMessage'
					name='message'
					placeholder='Message'
					ref={register({
						required: { value: true, message: '• Message is required' },
						minLength: {
							value: 5,
							message: '• Message must be a minimum of 5 letters',
						},
						maxLength: {
							value: 500,
							message: '• Message must be less than 500 letters long',
						},
					})}
					onChange={handleChange}
				/>
				{errors.message && <p className='Error'>{errors.message.message}</p>}
				<button className='Contact__Submit' onClick={handleSubmit(handleForm)}>
					Send Message
				</button>
			</form>
		);
	} else if (isSubmitted) {
		return (
			<div className='Contact'>
				<p className='Close' onClick={onClose}>
					&#x2715;
				</p>
				<div className='Contact__Sent'>
					<div className='Contact__Image'></div>
					<p>Message has been sent</p>
				</div>
			</div>
		);
	}
};

export default Contact;

// geojson layers
