const numbers = [1, 2, 3, 4];

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.myReduce = function (callback, firstValue) {
    let package = firstValue !== undefined ? firstValue : this[0];
    let i = firstValue !== undefined ? 0 : 1;

    for (; i < this.length; i++) {
        package = callback(package, this[i], i, this);
    }
    return package;
};

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};


const double = numbers.myMap(n => n * 2);
const pairs = numbers.myFilter(n => n % 2 === 0);
const sum = numbers.myReduce((a, n) => a + n, 0);

console.log("Map:", double);
console.log("Filter:", pairs);
console.log("Reduce:", sum);