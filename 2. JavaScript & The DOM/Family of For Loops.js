// Traditional Loop Syntax
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
}

// New Loop Syntax
for (const index in digits) {
    console.log(digits[index]);
}

// Array
Array.prototype.decimalfy = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2);
    }
};

for (const index in digits) {
    console.log(digits[index]);
}

// For of Loop
for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
}