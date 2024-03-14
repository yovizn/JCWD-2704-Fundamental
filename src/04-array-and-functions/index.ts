let fruits = ['Apple', 'Oranges', 'Plum'];

for (let fruit of fruits) {
    console.log(fruit);
}

const greet = Greeting('Santos');

console.log(greet('Guns'));

function Greeting(input: string) {
    const defaultGreeting = 'Hello ';

    return function (secInput?: string) {
        if (secInput) {
            return defaultGreeting + input + ' ' + secInput;
        }

        return defaultGreeting + input;
    };
}

const multiplier = Multiplier(3);
console.log(multiplier(3));

function Multiplier(factor: number) {
    return function (number: number) {
        return number * factor;
    };
}

console.log(fruits);
const arrN = [10, 55, 79, 32];
const descent = arrNum.sort((a, b) => b - a).slice(0, 1);

console.log(Number(descent));

const getMessage = (fName: string) => {
    const sayHello = () => `Hello los ${fName}, `;
    const defaultMsg = () => `Selamat datang di purwadhika`;

    return sayHello() + defaultMsg();
};

console.log(getMessage('santos'));
