import React from 'react';

const DiscussionCategory = ({name, post, select}) => {
	return (
		<div className='Discussion__CategoryItem'  onClick={select} >
			<h5>{name}</h5>
			<p>{post} post</p>
		</div>
	);
};

export default DiscussionCategory;
