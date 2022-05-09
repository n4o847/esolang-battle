const assert = require('assert');
const range = require('lodash/range');
const sample = require('lodash/sample');

module.exports.getPrecedingIndices = (cellIndex) => {
	const width = 5;
	const height = 5;
	assert(cellIndex >= 0);
	assert(cellIndex < width * height);

	const x = cellIndex % width;
	const y = Math.floor(cellIndex / width);

	const precedingCells = [];
	if (x - 1 >= 0) {
		precedingCells.push(y * width + (x - 1));
	}
	if (x + 1 < width) {
		precedingCells.push(y * width + (x + 1));
	}
	if (y - 1 >= 0) {
		precedingCells.push((y - 1) * width + x);
	}
	if (y + 1 < height) {
		precedingCells.push((y + 1) * width + x);
	}

	return precedingCells.filter(
		(cell) => ![0, 4, 5, 9, 10, 14, 15, 19, 20, 24].includes(cell),
	);
};

module.exports.generateInput = () => {
	const mines = ['.', 'M', ...range(26).map(() => sample(['.', 'M'])), 'M', '.'];
	const input = `${mines.join('')}\n`;
	return input;
};

module.exports.isValidAnswer = (input, output) => {
	const mines = input.trim().split('').map((_) => _ === 'M');

	const counts = [];
	for (let i = 0; i < 30; i++) {
		let count = 0;
		if (i - 1 >= 0) {
			count += mines[i - 1] ? 1 : 0;
		}
		count += mines[i] ? 1 : 0;
		if (i + 1 < 30) {
			count += mines[i + 1] ? 1 : 0;
		}
		counts.push(count);
	}

	const correctOutput = counts.join('');

	const trimmedOutput = output.toString().replace(/\s/g, '');

	console.log('info:', {input, correctOutput, output, trimmedOutput});

	return trimmedOutput === correctOutput;
};
