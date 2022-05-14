const langsData = require('../langs.json');

const languages = {
	// squares
	0: '',
	1: 'produire',
	2: 'cpp-compile-time-clang',
	3: 'golfscript',
	4: 'mines',
	5: '',
	6: '',
	7: 'whitespace',
	8: 'aheui',
	9: 'haskell',
	10: 'ocaml',
	11: '',

	// hexagons
	12: 'csharp',
	13: 'tetris',
	14: 'node',
	15: 'mao',
	16: 'fish',
	17: 'wysiscript',
	18: 'jellyfish',
	19: 'compile-time-typescript',

	// octagons
	20: 'bash-busybox',
	21: 'cpp-clang',
	22: 'c-gcc',
	23: 'python3',
	24: 'ruby',
	25: 'brainfuck-esomer',
};

module.exports = Array(26)
	.fill()
	.map((_, index) => {
		if (index === 0 || index === 11) {
			return {
				type: 'base',
				team: 0,
			};
		}

		if (index === 5 || index === 6) {
			return {
				type: 'base',
				team: 1,
			};
		}

		const langDatum = langsData.find((lang) => lang.slug === languages[index]);

		return {
			type: 'language',
			slug: languages[index],
			name: langDatum ? langDatum.name : '',
			link: langDatum ? langDatum.link : '',
		};
	});
