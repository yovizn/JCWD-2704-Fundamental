// 01. Triangle Pattern

console.log(TrianglePattern(5));

function TrianglePattern(input: number) {
    let counter = 1;

    for (let idx = 1; idx <= input; idx++) {
        let container = '';

        for (let i = 1; i <= idx; i++) {
            const formater = counter < 10 ? '0' + counter : counter;

            container += formater + ' ';
            counter++;
        }

        console.log(container);
    }
}

// 02. FizzBuzz

console.log(FizzBuzz(15));

function FizzBuzz(input: number) {
    let container = '';

    for (let idx = 1; idx <= input; idx++) {
        let wrapFizzBuzz = idx.toString();
        console.log(wrapFizzBuzz);

        if (idx % 15 == 0) {
            container += wrapFizzBuzz = 'FizzBuzz ';
        } else if (idx % 3 == 0) {
            container += wrapFizzBuzz = 'Fizz ';
        } else if (idx % 5 == 0) {
            container += wrapFizzBuzz = 'Buzz ';
        } else {
            container += wrapFizzBuzz + ' ';
        }

        console.log(container);
    }

    return container;
}

// 03. Calculate Body Mass Index (BMI)

const CalcBMI = (weight: number, height: number) => {
    const value = weight / (height * height);

    if (value < 18.5) return 'less wight';

    if (value > 18.5 && value < 24.9) return 'ideal';

    if (value > 25.0 && value < 29.9) return 'overweight';

    if (value > 30.0 && value < 39.9) return 'very overweight';

    if (value > 39.9) return 'obesity';

    return value;
};

console.log(CalcBMI(63, 1.81));

console.log(63 / (1.8 * 1.8));

// 04. Remove all odd numbers in an array and return a new array

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RemoveAllOddsNumbers = (input: number[]) => {
    const oddNumber = input.filter((el) => el % 2 === 0);
    return oddNumber;
};

console.log(RemoveAllOddsNumbers(arrNumber));

// 05. Split String

function SplitWord(input: string) {
    const output = input.split(' ');

    return output;
}

console.log(SplitWord('Hellow World'));
