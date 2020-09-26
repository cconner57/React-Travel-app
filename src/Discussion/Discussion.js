import React, { useState, useEffect } from 'react';
import DiscussionCategory from './DiscussionCategory';
import DiscussionItem from './DiscussionItem';
import DiscussionPost from './DiscussionPost';
import DiscussionForm from './DiscussionForm';
import LoginError from '../Login-Signup/LoginError';
import { v4 as uuidv4 } from 'uuid';
import './Discussion.scss';

const Discussion = () => {
	const [loggedIn] = useState(true);
	const [category, setCategory] = useState('General');
	const [post, setPost] = useState([
		{
			id: uuidv4(),
			category: 'General',
			title: 'First post',
			name: 'Chris',
			replies: 5,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'General',
			title: 'Second post',
			name: 'Chris',
			replies: 4,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'General',
			title: 'Third post',
			name: 'Chris',
			replies: 1,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'General',
			title: 'Fourth post',
			name: 'Chris',
			replies: 7,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'News',
			title: 'Fifth post',
			name: 'Chris',
			replies: 8,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'News',
			title: 'Sixth post',
			name: 'Chris',
			replies: 9,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'Culture',
			title: 'Seventh post',
			name: 'Chris',
			replies: 2,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'Culture',
			title: 'Eighth post',
			name: 'Chris',
			replies: 5,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'Experiences',
			title: 'Ninth post',
			name: 'Chris',
			replies: 7,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'Experiences',
			title: 'Tenth post',
			name: 'Chris',
			replies: 6,
			age: '2 days',
			content: 'Testing',
		},
	]);
	const [newPost, setNewPost] = useState({title: '', content: ''})
	const [selectedPost, setSelectedPost] = useState();
	// const [categoryNum, setCategoryNum] = useState({General: '', News: '', Culture: '', Experiences: ''})

	const handleChange = (e) => {
		setNewPost({...newPost, [e.target.name]: e.target.value})
	}

	const makePost = (e) => {
		e.preventDefault()
		setPost([
			...post,
			{
				id: uuidv4(),
				category: { category },
				name: 'Chris',
				replies: '',
				age: '',
				title: newPost.title,
				content: newPost.content
			},
		]);
		setPost({title: '', content: ''})
		console.log('submitted', post)
	};

	const postNumbers = (type) => {
		let count = post.filter((num) => num.category === type);
		return count.length;
	};

	if (loggedIn) {
		return (
			<div className='Discussion'>
				<div className='Discussion__Category'>
					<DiscussionCategory
						name='General'
						post={postNumbers('General')}
						select={() => setCategory('General')}
					/>
					<hr />
					<DiscussionCategory
						name='News'
						post={postNumbers('News')}
						select={() => setCategory('News')}
					/>
					<hr />
					<DiscussionCategory
						name='Culture'
						post={postNumbers('Culture')}
						select={() => setCategory('Culture')}
					/>
					<hr />
					<DiscussionCategory
						name='Experiences'
						post={postNumbers('Experiences')}
						select={() => setCategory('Experiences')}
					/>
				</div>
				<div className='Discussion__Topic'>
					<div className='Discussion__Heading'>
						<p>{category}</p>
						<button onClick={() => setSelectedPost('')}>New Post</button>
					</div>
					<hr />
					{category &&
						post.filter((post) => post.category === category)
							.map((post, id) => {
								return (
									<DiscussionItem
										key={id}
										id={post.id}
										title={post.title}
										name={post.name}
										replies={post.replies}
										age={post.age}
										selectPost={setSelectedPost}
									/>
								);
							})}
				</div>
				<div className='Discussion__Post'>
					{(selectedPost &&
						post.filter((post) => post.id === selectedPost)
							.map((post, id) => {
								return (
									<DiscussionPost
										key={id}
										title={post.title}
										name={post.name}
										date={post.age}
										content={post.content}
									/>
								);
							})) || <DiscussionForm makePost={makePost} handleChange={handleChange} />}
				</div>
			</div>
		);
	} else {
		return <LoginError />;
	}
};

export default Discussion;
