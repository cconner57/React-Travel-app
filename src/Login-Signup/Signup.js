import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Login-Signup.scss';

const Signup = () => {
	const [form, setForm] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { register, handleSubmit, errors, watch } = useForm();

	const password = useRef({});
	password.current = watch('password', '');

	let history = useHistory();

	let back = (e) => {
		e.stopPropagation();
		history.goBack();
	};

	const handleForm = async () => {
		try {
			const response = await axios.post('https://travel-buddy1.herokuapp.com/:id/signup', {
				first_name: form.first_name,
				last_name: form.last_name,
				email: form.email,
				password: form.password,
			});
			sessionStorage.setItem('userInfo', JSON.stringify(response.data.data.users));
			sessionStorage.setItem('loggedIn', response.data.data.loggedIn);
			history.goBack();
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	return (
		<form
			className='Signup'
			onSubmit={(e) => e.preventDefault()}
			autoComplete='on'>
			<p className='Close' onClick={back}>
				&#x2715;
			</p>
			<h4 className='Signup__Heading'>
				<span>Create</span> your account
			</h4>
			<label htmlFor='first_name' className='Signup__Label'>
				First Name
			</label>
			<input
				id='first_name'
				className='Signup__Input'
				type='text'
				name='first_name'
				ref={register({
					required: '• You must enter a first name',
					minLength: {
						value: 2,
						message: '• First name must have at least 2 characters',
					},
				})}
				onChange={handleChange}
			/>
			{errors.first_name && (
				<p className='Error'>{errors.first_name.message}</p>
			)}
			<label htmlFor='last_name' className='Signup__Label'>
				Last Name
			</label>
			<input
				id='last_name'
				className='Signup__Input'
				type='text'
				name='last_name'
				ref={register({
					required: '• You must enter a last name',
					minLength: {
						value: 2,
						message: '• Last name must have at least 2 characters',
					},
				})}
				onChange={handleChange}
			/>
			{errors.last_name && <p className='Error'>{errors.last_name.message}</p>}
			<label htmlFor='email' className='Signup__Label'>
				Email:
			</label>
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
			<label htmlFor='password' className='Signup__Label'>
				Password:
			</label>
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
			<label htmlFor='password2' className='Signup__Label'>
				Verify Password:
			</label>
			<input
				id='password2'
				className='Signup__Input'
				type='password'
				name='password_repeat'
				ref={register({
					validate: (value) =>
						value === password.current || '• Passwords do not match',
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
