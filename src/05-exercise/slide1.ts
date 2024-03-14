// 01. Function to get the lowest, highest and average
let arrNumber = [12, 5, 23, 18, 4, 45, 32];

console.log(arrNumber.length);

function Exercise1(input: number[]) {
    function Lowest() {
        let minValue = input[0];
        for (let idx = 0; idx <= input.length; idx++) {
            input[idx] < minValue && (minValue = input[idx]);
        }
        return minValue;
    }

    function Highest() {
        let minValue = input[0];
        for (let idx = 0; idx <= input.length; idx++) {
            input[idx] > minValue && (minValue = input[idx]);
        }
        return minValue;
    }

    function Average() {
        const value = input.reduce((a, b) => a + b) / input.length;

        return value.toFixed(4);
    }

    return {
        lowest: Lowest(),
        highest: Highest(),
        average: Average(),
    };
}

console.log(Exercise1(arrNumber));

// 02. Change Array to string

let arrString = ['apple', 'banana', 'cherry', 'date'];

function ArrayToString(input: string[]) {
    return input.sort();
}

console.log(ArrayToString(arrString));

// 03. string to Array

let str = 'Hello World';

console.log(str.split(' '));

// 04. A function to calculate each element in the same position from two arrays of integer.

const arrNum1 = [1, 2, 3];
const arrNum2 = [3, 2, 1];

function CalcArray(input1: number[], input2: number[]) {
    for (let idx = 0; idx < input1.length; idx++) {
        input1[idx] += input2[idx];
        console.log(input1);
    }

    return arrNum1;
}

console.log(CalcArray(arrNum1, arrNum2));

// 05. A function that adds an element to the end of an array

function AddsElements(input: number) {
    let arrNum = [1, 2, 3, 4];

    arrNum.push(input);

    return arrNum.filter((val, idx) => arrNum.indexOf(val) === idx);
}

console.log(AddsElements(7));
