const assert = require('assert');

module.exports.getPrecedingIndices = (cellIndex) => {
	assert(cellIndex >= 0);
	assert(cellIndex < 16);

	const x = cellIndex % 4;
	const y = Math.floor(cellIndex / 4);

	const precedingCells = [];

	if (x - 1 >= 0) {
		precedingCells.push(y * 4 + (x - 1));
	}

	if (x + 1 < 4) {
		precedingCells.push(y * 4 + (x + 1));
	}

	if (y - 1 >= 0) {
		precedingCells.push((y - 1) * 4 + x);
	}

	if (y + 1 < 4) {
		precedingCells.push((y + 1) * 4 + x);
	}

	return precedingCells;
};

module.exports.generateInput = () => {
	return ``;
};

module.exports.isValidAnswer = (input, output) => {
	return true;
};
