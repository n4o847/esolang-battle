const assert = require('assert');
const flatten = require('lodash/flatten');
const langsData = require('../langs.json');

const languages = [
	['', 'compile-time-typescript', '', 'ruby'],
	['', 'bash-busybox', 'cpp-clang', ''],
	['', 'python3', 'node', 'wysiscript'],
	['crystal', '', '', ''],
];

module.exports = flatten(languages).map((language, index) => {
	if (index === 7 || index === 8) {
		return {
			type: 'base',
			team: 0,
		};
	}

	if (index === 2 || index === 13) {
		return {
			type: 'base',
			team: 1,
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
