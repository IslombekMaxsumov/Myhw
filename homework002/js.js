function evenOrOdd(n) {
    return n % 2 === 0 ? "Juft" : "Toq";
}

function checkSign(n) {
    return n > 0 ? "Musbat" : n < 0 ? "Manfiy" : "Nol";
}

function modifyNumber(n) {
    return n > 0 ? n + 1 : n - 2;
}

function power(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

function stringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

function maxOfTwo(a, b) {
    return a > b ? a : b;
}

function firstElement(arr) {
    for (let i in arr) {
        return arr[i];
    }
}

function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function getWeekday(n) {
    let days = {1: "Dushanba", 2: "Seshanba", 3: "Chorshanba", 4: "Payshanba", 5: "Juma", 6: "Shanba", 0: "Yakshanba"};
    return days[n] !== undefined ? days[n] : "Noto‘g‘ri kun";
}

function evenNumbers(k, n) {
    let result = [];
    for (let i = k; i <= n; i++) {
        if (i % 2 === 0) {
            result[result.length] = i;
        }
    }
    return result;
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(7));

console.log(checkSign(10));
console.log(checkSign(-5));
console.log(checkSign(0));

console.log(modifyNumber(5));
console.log(modifyNumber(-3));

console.log(power(2, 3));
console.log(power(5, 2));

console.log(stringLength("Hello"));
console.log(stringLength("JavaScript"));

console.log(maxOfTwo(10, 20));
console.log(maxOfTwo(30, 15));

console.log(firstElement([3, 7, 2, 9]));
console.log(firstElement(["a", "b", "c"]));

console.log(sumToN(5));
console.log(sumToN(10));

console.log(getWeekday(1));
console.log(getWeekday(5));
console.log(getWeekday(8));

console.log(evenNumbers(2, 10));
console.log(evenNumbers(5, 15));
