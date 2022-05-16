const range = require('lodash/range');
const sample = require('lodash/sample');
const truncatedCuboctahedron = require('../data/truncated-cuboctahedron');

module.exports.getPrecedingIndices = (cellIndex) => {
	const faces = [
		...truncatedCuboctahedron.squares,
		...truncatedCuboctahedron.hexagons,
		...truncatedCuboctahedron.octagons,
	];
	const face = faces[cellIndex];

	return Array(26)
		.fill()
		.map((_, index) => index)
		.filter((index) => {
			if (index === cellIndex) {
				return false;
			}

			const testFace = faces[index];
			const sharedVertices = testFace.filter((vertice) => face.includes(vertice));

			return sharedVertices.length === 2;
		});
};

const lineNum = 10;

module.exports.generateInput = () => {
	const lines = range(lineNum).map(() => {
		const year = sample(range(60));
		return (year % 10) + 'abcdefghijkl'[year % 12];
	});
	return `${lines.join('\n')}\n`;
};

module.exports.isValidAnswer = (input, output) => {
	const inputLines = input.trim().split('\n');
	const outputLines = output
		.toString()
		.replace(/\s+/g, '\n')
		.trim()
		.split('\n')
		.map((s) => Number(s));
	const sampleAnswer = inputLines.map((line) => {
		const a = line[0].charCodeAt(0);
		const b = line[1].charCodeAt(0);
		return (((a - b) % 12) * 5 + a + 21) % 60;
	});
	const check = range(lineNum).map(
		(i) => outputLines[i] !== 0 && sampleAnswer[i] === outputLines[i] % 60,
	);
	return !check.includes(false);
};
