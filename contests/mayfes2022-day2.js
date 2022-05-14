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

module.exports.generateInput = () => {
	return ``;
};

module.exports.isValidAnswer = (input, output) => {
	return true;
};
