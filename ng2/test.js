function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
let a  = createArray(3, 'x');
createArray(2, 6);
