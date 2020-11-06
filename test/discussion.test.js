const { postNumbers, modifyDate } = require('../src/Discussion/Discussion');

test('get total number of post', () => {
	const post = [
		{
			id: 1,
			title: 'Trip to the Grand Canyon',
			message: 'Anyone have any tips/recommendations?',
			user_id: 1,
			category_id: 1,
			created_at: '2020-10-10 17:44:16.180966-07',
		},
		{
			id: 2,
			title: 'Disney World',
			message: 'Cheapest hotels to stay at?',
			user_id: 1,
			category_id: 1,
			created_at: '2020-10-10 18:21:17.371759-07',
		},
		{
			id: 3,
			title: 'New York Trip',
			message: "What's your top 3 sites to check out here?",
			user_id: 1,
			category_id: 2,
			created_at: '2020-10-10 18:24:26.731274-07',
		},
		{
			id: 4,
			title: 'Hiking in Oregon',
			message: 'What hiking spots do you recommend?',
			user_id: 1,
			category_id: 3,
			created_at: '2020-10-10 18:26:12.246997-07',
		},
	];
	const totalPost = postNumbers(1);
	expect(totalPost).toEqual(expect.any(Number));
});

test('modify UTC date to mm/dd/yyyy', () => {
	const newDate = modifyDate('2020-10-08 16:04:10.956347-07');
	expect(newDate).toBe('10/08/2020');
});
