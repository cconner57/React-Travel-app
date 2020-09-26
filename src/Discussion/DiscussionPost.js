import React from 'react';

const DiscussionPost = ({title, name, date, content}) => {
	return (
		<div className='Discussion__PostItem'>
			<h4>{title}</h4>
			<h5>Started by: {name} on {date}</h5>
			<p>{content}</p>
			<button>Reply</button>
		</div>
	);
};

export default DiscussionPost;
