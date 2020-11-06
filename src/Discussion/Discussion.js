import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, newPosts } from '../ReduxActions/postActions';
import { fetchComments, newComments } from '../ReduxActions/commentActions';
import DiscussionCategory from './DiscussionCategory';
import DiscussionItem from './DiscussionItem';
import DiscussionPost from './DiscussionPost';
import DiscussionForm from './DiscussionForm';
import LoginError from '../Login-Signup/LoginError';
import axios from 'axios';
import './Discussion.scss';

const Discussion = () => {
	const post = useSelector((state) => state.postReducer.data);
	const comment = useSelector((state) => state.commentReducer.data);
	const loggedIn = sessionStorage.getItem('loggedIn');
	const name = JSON.parse(sessionStorage.getItem('userInfo'));
	const dispatch = useDispatch();

	const [users, setUsers] = useState([]);
	const [category, setCategory] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState({
		id: 1,
		name: 'General',
	});
	const [selectedPost, setSelectedPost] = useState(undefined);

	const [addPost, setAddPost] = useState({
		title: '',
		content: '',
		category: selectedCategory,
	});

	const [addComment, setAddComment] = useState({
		post_id: '',
		content: '',
	});

	useEffect(() => {
		const fetchCatagories = async () => {
			try {
				const response = await axios.get('https://travel-buddy.vacations/discussion');
				dispatch(fetchPosts(response.data.data.post));
				dispatch(fetchComments(response.data.data.comment));
				setCategory(response.data.data.category);
				setUsers(response.data.data.user);
			} catch (error) {
				console.log(error);
			}
		};
		if (loggedIn) {
			fetchCatagories();
		}
	}, [dispatch, loggedIn]);

	const handleChange = (e) => {
		setAddPost({ ...addPost, [e.target.name]: e.target.value });
	};

	const handleComment = (e) => {
		setAddComment({
			...addComment,
			post_id: e.target.id,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		try {
			const response = await axios.post('https://travel-buddy.vacations/discussion', {
				title: addPost.title,
				content: addPost.content,
				category_id: addPost.category.id,
				user_id: name.id,
			});
			setSelectedPost(response.data.data.threads.id);
			dispatch(newPosts(response.data.data.threads));
		} catch (error) {
			console.log(error);
		}
	};

	const submitComment = async () => {
		try {
			const response = await axios.post('https://travel-buddy.vacations/discussion', {
				comment: addComment.comment,
				user_id: name.id,
				post_id: addComment.post_id,
			});
			dispatch(newComments(response.data.data.comments));
		} catch (error) {
			console.log(error);
		}
	};

	const postNumbers = useCallback(
		(type) => {
			let count = post.filter((num) => num.category_id === type);
			return count.length;
		},
		[post]
	);

	const modifyDate = (timestamp) => {
		const oldDate = timestamp.toString().split('T');
		return oldDate[0].slice(5).replace('-', '/') + '/' + oldDate[0].slice(0, 4);
	};

	const replies = (num) => {
		const numReplies = comment.filter((comment) => comment.post_id === num);
		return numReplies.length;
	};

	return (
		<div className='Discussion'>
			{!loggedIn && <LoginError />}
			<div className='Discussion__Category'>
				{category &&
					category.map((category, key) => (
						<DiscussionCategory
							key={key}
							name={category.name}
							post={postNumbers(category.id)}
							select={() => setSelectedCategory(category)}
						/>
					))}
			</div>
			<div className='Discussion__Topic'>
				<div className='Discussion__Heading'>
					<p>{selectedCategory.name}</p>
					<button
						onClick={() => {
							setSelectedPost('');
							setAddPost({ title: '', content: '' });
						}}>
						New Post
					</button>
				</div>
				<hr />
				{post &&
					post
						.filter((post) => post.category_id === selectedCategory.id)
						.map((post, id) => {
							return (
								<DiscussionItem
									key={id}
									post={post}
									user={users}
									comments={comment}
									age={modifyDate(post.created_at)}
									replies={replies}
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
									post={post}
									user={users}
									makeComment={submitComment}
									handleComment={handleComment}
									comments={comment}
									modifyDate={modifyDate}
								/>
							);
						})) || (
					<DiscussionForm
						makePost={handleSubmit}
						handleChange={handleChange}
						newPost={addPost}
					/>
				)}
			</div>
		</div>
	);
};

export default Discussion;
module.exports = {postNumbers, modifyDate};
