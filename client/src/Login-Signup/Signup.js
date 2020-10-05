import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login-Signup.scss'

const Signup = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
		password_repeat: '',
	});

	const { register, handleSubmit, watch, errors } = useForm();

	const password = useRef({});
	password.current = watch('password', '');

	const handleForm = () => {
		console.log('Testing');
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	let history = useHistory();

	let back = (e) => {
		e.stopPropagation();
		history.goBack();
	};

	return (
		<form
			className='Signup'
			onSubmit={(e) => e.preventDefault()}
			autoComplete='on'>
			<p className='Close' onClick={back}>
				&#x2715;
			</p>
			<h4 className='Signup__Heading'><span>Create</span> your account</h4>
			<label htmlFor='email' className='Signup__Label'>Email:</label>
			<input
				id='email'
				className='Signup__Input'
				type='email'
				name='email'
				ref={register({
					required: true,
					pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				})}
				onChange={handleChange}
			/>
			{errors.email && <p className='Error'>• Email must be valid</p>}
			<label htmlFor='password' className='Signup__Label'>Password:</label>
			<input
				id='password'
				className='Signup__Input'
				type='password'
				name='password'
				ref={register({
					required: '• You must specify a password',
					minLength: {
						value: 8,
						message: '• Password must have at least 8 characters',
					},
				})}
				onChange={handleChange}
			/>
			{errors.password && <p className='Error'>{errors.password.message}</p>}
			<label htmlFor='password2' className='Signup__Label'>Retype Password:</label>
			<input
				id='password2'
				className='Signup__Input'
				type='password'
				name='password_repeat'
				ref={register({
					validate: (value) =>
						value === password.current || '• The passwords do not match',
				})}
				onChange={handleChange}
			/>
			{errors.password_repeat && (
				<p className='Error'>{errors.password_repeat.message}</p>
			)}
			<button className='Signup__Submit' onClick={handleSubmit(handleForm)}>
				Submit
			</button>
		</form>
	);
};

export default Signup;
