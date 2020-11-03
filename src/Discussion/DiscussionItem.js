import React from 'react';

const DiscussionItem = ({ post, age, user, replies, selectPost }) => {
	const userPost = user.find((user) => user.id === post.user_id);

	return (
		<div className='Discussion__Item' onClick={() => selectPost(post.id)}>
			{userPost && (
				<>
					<h5>{post.title}</h5>
					<p>
						Started by {userPost.first_name} {userPost.last_name} on {age} •{' '}
						{replies(post.id)} {replies(post.id) > 1 ? 'replies' : 'reply'}
					</p>
				</>
			)}
		</div>
	);
};

export default DiscussionItem;
