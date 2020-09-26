import React from 'react';

const DiscussionItem = ({title, name, replies, age, selectPost, id}) => {
	return (
		<div className='Discussion__Item' onClick={() => selectPost(id)}>
			<h5>{title}</h5>
			<p>Started by {name} • {replies} Replies • Last reply {age} ago</p>
		</div>
	);
};

export default DiscussionItem;
