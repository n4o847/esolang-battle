const assert = require('assert');

module.exports.getPrecedingIndices = (cellIndex) => {
	const width = 4;
	const height = 4;
	assert(cellIndex >= 0);
	assert(cellIndex < width * height);

	const x = cellIndex % width;
	const y = Math.floor(cellIndex / width);

	const precedingCells = [];
	precedingCells.push(y * width + (x + 3) % width);
	precedingCells.push(y * width + (x + 1) % width);
	precedingCells.push(((y + 3) % height) * width + x);
	precedingCells.push(((y + 1) % height) * width + x);

	return precedingCells;
};

module.exports.generateInput = () => {
	return ``;
};

module.exports.isValidAnswer = (input, output) => {
	return true;
};
