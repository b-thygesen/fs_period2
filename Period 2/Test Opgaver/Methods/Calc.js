var exports = module.exports = {}

exports.add = function (n1, n2) {
    return n1 + n2;
}
exports.subtract = function (n1, n2) {
    return n1 - n2;
}

exports.times = function (n1, n2) {
    return n1 * n2;
}

exports.divide = function (n1, n2) {
    if (n1 || n2 !== 0) {
        return n1 / n2;
    }
    throw new Error("Cannot divide by zero");
}
