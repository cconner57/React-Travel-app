import React from 'react';
import { useForm } from 'react-hook-form';

const DiscussionForm = ({ makePost, handleChange, newPost }) => {
	const { register, handleSubmit, errors } = useForm();

	return (
		<form className='Discussion__Form' onSubmit={handleSubmit(makePost)}>
			<h5 className='Discussion__FormHeading'>
				<span>New</span> Post
			</h5>
			<label className='Discussion__Label' htmlFor='title'>
				Enter Title
			</label>
			<input
				className='Discussion__Input'
				id='title'
				type='text'
				name='title'
				value={newPost.title}
				onChange={handleChange}
				ref={register({ required: true })}
			/>
			{errors.title && <p className='Error'>• Title is required</p>}
			<label className='Discussion__Label' htmlFor='message'>
				Enter Message
			</label>
			<textarea
				className='Discussion__Textarea'
				name='content'
				id='message'
				value={newPost.content}
				onChange={handleChange}
				ref={register({
					required: { value: true, message: '• Message is required' },
					minLength: { value: 5, message: '• Message must be a minimum of 5 letters' },
					maxLength: { value: 40000, message: '• Message is too long' },
				})}></textarea>
				{errors.content && <p className='Error'>{errors.content.message}</p>}
			<button className='Discussion__Submit' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default DiscussionForm;
