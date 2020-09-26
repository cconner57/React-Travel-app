import React from 'react';

const DiscussionForm = ({ makePost, handleChange }) => {
	return (
		<form className='Discussion__Form' onSubmit={makePost}>
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
				onChange={handleChange}
			/>
			<label className='Discussion__Label' htmlFor='message'>
				Enter Message
			</label>
			<textarea
				className='Discussion__Textarea'
				name='content'
				id='message'
				onChange={handleChange}></textarea>
			<button className='Discussion__Submit' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default DiscussionForm;
