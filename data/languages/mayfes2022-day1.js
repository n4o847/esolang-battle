const assert = require('assert');
const flatten = require('lodash/flatten');
const langsData = require('../langs.json');

const languages = [
	['', 'brainfuck-esomer', 'produire', 'compile-time-typescript', ''],
	['', '', 'node', '', ''],
	['', 'c-gcc', 'golfscript', 'python3', ''],
	['', '', 'bash-busybox', '', ''],
	['', 'ruby', 'aheui', 'haskell', ''],
];

module.exports = flatten(languages).map((language, index) => {
	if (index === 6 || index === 18) {
		return {
			type: 'base',
			team: 1,
		};
	}

	if (index === 8 || index === 16) {
		return {
			type: 'base',
			team: 0,
		};
	}

	const langDatum = langsData.find((lang) => lang.slug === language);
	assert(language === '' || langDatum !== undefined, language);

	return {
		type: 'language',
		slug: language,
		name: langDatum ? langDatum.name : '',
		link: langDatum ? langDatum.link : '',
	};
});
