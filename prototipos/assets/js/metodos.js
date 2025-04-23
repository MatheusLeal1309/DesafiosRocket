const numbers = [1, 2, 3, 4];

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};


const double = numbers.myMap(n => n * 2);

console.log("Map:", double);
