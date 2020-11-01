import React from 'react';
import { useForm } from 'react-hook-form';

const DiscussionPost = ({
	post,
	makeComment,
	handleComment,
	comments,
	user,
	modifyDate,
}) => {
	const { register, handleSubmit, errors } = useForm();

	const userPost = user.find((user) => user.id === post.user_id);

	const findName = (comment) => {
		const locatedUser = user.find((user) => user.id === comment.user_id);
		return `${locatedUser.first_name} ${locatedUser.last_name}`;
	};

	return (
		<>
			<div className='Discussion__PostItem'>
				<h4>{post.title}</h4>
				<h5>
					Started by: {`${userPost.first_name} ${userPost.last_name}`} on{' '}
					{modifyDate(post.created_at)}
				</h5>
				<p>{post.message}</p>
			</div>
			{comments &&
				comments
					.filter((comment) => comment.post_id === post.id)
					.map((comment, key) => (
						<div key={key} className='Discussion__Comment'>
							<h5>
								<span>{findName(comment)}</span> on {modifyDate(comment.created_at)}
							</h5>
							<p>• {comment.message}</p>
						</div>
					))}
			<form
				className='Discussion__PostForm'
				onSubmit={handleSubmit(makeComment)}>
				<textarea
					id={post.id}
					name='comment'
					value={comments.content}
					placeholder='Reply here'
					onChange={handleComment}
					ref={register({
						required: { value: true, message: '• Comment is required' },
						minLength: {
							value: 5,
							message: '• Comment must be a minimum of 5 letters',
						},
						maxLength: { value: 20000, message: '• Comment is too long' },
					})}></textarea>
				{errors.comment && <p className='Error'>{errors.comment.message}</p>}
				<button type='submit'>Reply</button>
			</form>
		</>
	);
};

export default DiscussionPost;
