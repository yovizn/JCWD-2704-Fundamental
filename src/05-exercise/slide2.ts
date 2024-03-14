// 01. Even Number[]
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EvenNumber = (input: number[]) => {
    return input.filter((val) => !(val % 2 && val));
};

console.log(EvenNumber(arrayNumber));

// 02.

const InsertToArr = (maxValue: number, input: number[]) => {
    const value = input.slice(0, maxValue);

    return value;
};

const integers = [5, 10, 24, 3, 6, 7, 8];
const maxValue = 5;

console.log(InsertToArr(maxValue, integers));

// 03.

const CombineArr = (input1: number[], input2: number[]) => {
    return input1.concat(input2);
};

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(CombineArr(arr1, arr2));

// 04. Find duplicate Number[]

const DuplicateNumber = (input: number[]) => {
    let value = [];
};

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];

console.log(DuplicateNumber(arr));

// 05. Find Diff Number[]

const DiffNum = (input1: number[], input2: number[]) => {
    const diffArr1 = input1.filter((item) => !input2.includes(item));
    const diffArr2 = input2.filter((item) => !input1.includes(item));
    const data = diffArr1.concat(diffArr2);

    return data;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(DiffNum(array1, array2));
