// 01. Multiplication
let i: number | string;

for (i = 1; i <= 10; i++) {
    const nine = 9;
    let value = nine * i;
    console.log(`${nine} X ${i} = ${value}`);
}

// 02. Palindrome
const aString = 'Madam';

Palindrome(aString) ? console.log('Palindrome') : console.log('Not Palindrome');

function Palindrome(input: string) {
    const inputStr = input.toLowerCase().split('');

    const reverseStr = input.toLowerCase().split('').reverse();

    const checkLenght = input.length;

    for (let idx = 0; idx < checkLenght - 1 / 2; idx++) {
        if (inputStr[idx] !== reverseStr[idx]) {
            return false;
        }
    }
    return true;
}

let value: number;

// 03. Convert Centimeter to Kilometer
value = 100000;

console.log(`${value.toLocaleString()} cm = ${ConvertCmToKm(value)} km`);

function ConvertCmToKm(input: number) {
    const centimeter = input / 100000;

    return centimeter.toLocaleString();
}

// 04. Convert USD to IDR
value = 1000;

const idr = value.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    // maximumFractionDigits: 0,
});

console.log(idr);

// 05. Remove the first occurrence of a given “search string” from a string
let str = 'Hello World';
const searchStr = 'Ell';

// console.log(str.replace(/ell/, ''));

console.log(RemoveSearchStr(str, searchStr));

function RemoveSearchStr(input: string, searchs: string) {
    const search = searchs.toLowerCase();
    console.log(search);

    const index = input.toLowerCase().indexOf(search);
    console.log(index);

    if (index !== -1) {
        const searching =
            input.slice(0, index) + input.slice(index + searchStr.length);

        console.log(input.slice(0, index));
        console.log(searchStr.length);
        console.log(input.slice(index + searchStr.length));

        return searching;
    }

    return input;
}

// 06. Capitalize first letter from string
str = 'santos ok banget kwkwk wkwk';

console.log(CapitalizeWords(str));

function CapitalizeWords(input: string) {
    let words = input.split(' ');
    console.log(words);

    let capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    let result = capitalizedWords.join(' ');

    return result;
}

// 07. Reverse string
str = 'santos ga di acc';

console.log(ReverseString(str));

function ReverseString(input: string) {
    let words = input.split(' ');

    console.log(words);

    let reverse = words.map((word) => word.split('').reverse().join(''));

    let result = reverse.reverse().join(' ');

    return result;
}

// 08. Swap char

str = 'SAntOs punYA ManGga kAyakNYA gEde!!!';

console.log(SwapChar(str));

function SwapChar(str: string) {
    let swapper = '';

    for (let idx = 0; idx < str.length; idx++) {
        let currentChar = str.charAt(idx);

        swapper +=
            currentChar === currentChar.toUpperCase()
                ? currentChar.toLocaleLowerCase()
                : currentChar.toUpperCase();
    }

    return swapper;
}

// 09. The largest of two given integers

let n1: number, n2: number;

n1 = 96;
n2 = 69;

console.log(ComparisonNumber(n1, n2));

function ComparisonNumber(input1: number, input2: number) {
    if (input1 >= input2) return input1;

    return input2;
}

// 10. Sorting less to Number
let num1 = 12;
let num2 = 27;
let num3 = 18;

console.log(SortingNumbers(num1, num2, num3));

function SortingNumbers(a: number, b: number, c: number) {
    let container = [a, b, c];

    const value = container.sort((num, idx) => num - idx).join();
    console.log(value);

    return value;
}

// 11. Show input type by number

const checker = 'magic is not power full enough';

console.log(
    `type of (${checker}) is ${typeof checker} = ${InputCheck(checker)}`
);

function InputCheck(str: string | number | any) {
    let strType = '';
    let numType = 0;

    if (typeof str === typeof strType) {
        return 1;
    } else if (typeof str === typeof numType) {
        return 2;
    } else {
        return 3;
    }
}

// 12. Replace an alphabet to '*'

str = 'Looking at an apple all day, and a batch of creams';

console.log(ReplaceTo(str));

function ReplaceTo(input: string) {
    let result = '';

    const text = input.toLowerCase();

    for (let idx = 0; idx < text.length; idx++) {
        if (text[idx] === 'a') {
            result += '*';
        } else {
            result += text[idx];
        }
    }
    console.log(result.charAt(0).toUpperCase() + result.slice(1));
    return result;
}
