import React, { useState } from 'react';
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
	const [selectedPost, setSelectedPost] = useState();
	const [post, setPost] = useState([
		{
			id: uuidv4(),
			category: 'General',
			title: 'Trip to the Grand Canyon',
			name: 'Chris',
			replies: 5,
			age: '2 days',
			content: 'Anyone have any tips/recommendations?',
		},
		{
			id: uuidv4(),
			category: 'General',
			title: 'Disney World',
			name: 'Chris',
			replies: 4,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'General',
			title: 'New York trip',
			name: 'Chris',
			replies: 1,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'General',
			title: 'Superbowl',
			name: 'Chris',
			replies: 7,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'News',
			title: 'Safe to travle again?',
			name: 'Chris',
			replies: 8,
			age: '2 days',
			content: 'The family is planning a trip to Florida. How safe is it to travel there?',
		},
		{
			id: uuidv4(),
			category: 'News',
			title: 'Travel Deals',
			name: 'Chris',
			replies: 9,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'Culture',
			title: 'Mardi Gras',
			name: 'Chris',
			replies: 2,
			age: '2 days',
			content: 'What should I know before going? Any food/hotel recommendations?',
		},
		{
			id: uuidv4(),
			category: 'Culture',
			title: 'Dia de los Muertos',
			name: 'Chris',
			replies: 5,
			age: '2 days',
			content: 'Testing',
		},
		{
			id: uuidv4(),
			category: 'Experiences',
			title: 'Best hiking trails',
			name: 'Chris',
			replies: 7,
			age: '2 days',
			content: 'The South Kaibab Trail at the Grand Canyon was pretty tough!',
		},
		{
			id: uuidv4(),
			category: 'Experiences',
			title: 'Best place to paraglide?',
			name: 'Chris',
			replies: 6,
			age: '2 days',
			content: 'Testing',
		},
	]);
	const [newPost, setNewPost] = useState({
		id: uuidv4(),
		title: '',
		content: '',
	});

	const handleChange = (e) => {
		setNewPost({ ...newPost, [e.target.name]: e.target.value });
	};

	const makePost = () => {
		setPost([
			{
				id: newPost.id,
				category: category,
				name: 'Chris',
				replies: '',
				age: modifyDate(),
				title: newPost.title,
				content: newPost.content,
			},
			...post
		]);
		setSelectedPost(newPost.id);
	};

	const modifyDate = () => {
		let date = new Date().toString().slice(4,15).split('')
		date.splice(6, 0, ',')
        return date.join('')
	}

	const postNumbers = (type) => {
		let count = post.filter((num) => num.category === type);
		return count.length;
	};

	//server sent events connection

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
						<button
							onClick={() => {
								setSelectedPost('');
								setNewPost({ id: uuidv4(), title: '', content: '' });
							}}>
							New Post
						</button>
					</div>
					<hr />
					{category &&
						post
							.filter((post) => post.category === category)
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
						post
							.filter((post) => post.id === selectedPost)
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
							})) || (
						<DiscussionForm
							makePost={makePost}
							handleChange={handleChange}
							newPost={newPost}
						/>
					)}
				</div>
			</div>
		);
	} else {
		return <LoginError />;
	}
};

export default Discussion;
