
exports.min = function min (array) {
	if (!Array.isArray(array) || array.length == 0) return 0;
	return Math.min.apply(null, array);
}

exports.max = function max (array) {
	if (!Array.isArray(array) || array.length == 0) return 0;
	return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
	if (!Array.isArray(array) || array.length == 0) return 0;
	return array.reduce((sum, current) => sum +=current) / array.length;
}
