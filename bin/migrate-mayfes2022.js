const fs = require('fs').promises;
const mongoose = require('mongoose');
const Contest = require('../models/Contest');
const User = require('../models/User');

mongoose.Promise = global.Promise;

(async () => {
	await mongoose.connect('mongodb://localhost:27017/esolang-battle');

	await User.updateMany(
		{admin: true},
		{$set: {admin: false}},
	);

	for (const id of ['n4o847', 'finalexception', 'NOCO_1002', 'fabon-f']) {
		{
			const user = await User.findOne({email: `${id}@twitter.com`});
			if (user) {
				user.admin = true;
				await user.save();
			}
		}
		{
			const user = await User.findOne({email: `${id}@github.com`});
			if (user) {
				user.admin = true;
				await user.save();
			}
		}
	}

	await Contest.updateOne(
		{id: 'mayfes2022-day1'},
		{
			name: '[TSG LIVE! 8] Live CodeGolf Contest Day1',
			id: 'mayfes2022-day1',
			start: new Date('2022-05-14T15:05:00+0900'),
			end: new Date('2022-05-14T16:20:00+0900'),
			description: {
				ja: await fs.readFile('bin/rules/mayfes2022-day1-ja.md'),
				en: '',
			},
		},
		{upsert: true},
	);

	await Contest.updateOne(
		{id: 'mayfes2022-day2'},
		{
			name: '[TSG LIVE! 8] Live CodeGolf Contest Day2',
			id: 'mayfes2022-day2',
			start: new Date('2022-05-15T15:05:00+0900'),
			end: new Date('2022-05-15T16:50:00+0900'),
			description: {
				ja: await fs.readFile('bin/rules/mayfes2022-day2-ja.md'),
				en: '',
			},
		},
		{upsert: true},
	);

	mongoose.connection.close();
})();
