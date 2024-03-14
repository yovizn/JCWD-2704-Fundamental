function IfStatement() {
    let age = 21;

    if (age >= 17) {
        console.log(age >= 17);
        console.log('Buat KTP');
    }

    age >= 17 && age <= 20
        ? console.log('Bisa Buat KTP')
        : age >= 21 && age <= 28
        ? console.log('Ada KTP')
        : console.log('belum bisa');
}
IfStatement();

function SwitchCase() {
    const expr: string = 'ORANGES';

    switch (expr.toLowerCase()) {
        case 'Oranges'.toLowerCase():
            console.log('Oranges');
            break;
        case 'Mangoes'.toLowerCase():
        case 'Papayas'.toLowerCase():
            console.log('Papayas and Mangoes');
            break;
        default:
            console.log('Sorry');
            break;
    }
}
SwitchCase();

function ForLoop() {
    let i = 0;
    let idx = 0;
    let id = 0;

    for (i; i < 4; i++) {
        console.log('Ini For');
    }

    while (id < 4) {
        console.log('Ini While');
        id++;
    }

    do {
        console.log(idx);
        idx++;
    } while (idx < 4);

    for (let i = 0; i < 5; i++) {
        if (i === 2) break;
        console.log(i);
    }
}
ForLoop();

function Excercise() {
    // 1.
    let celcius: number = 60;

    const convert = (celcius: number) => {
        const hasil = celcius * 1.8 + 32;
        return hasil;
    };

    if (celcius) {
        convert(celcius);
        console.log(`${celcius} celcius = ${convert(celcius)} fahrenheit`);
    }

    // 2.
    const number = 25;
    number % 2 === 0
        ? console.log(`${number} is Even number`)
        : console.log(`${number} is Odd number`);

    // 3.
    const check: number = 7;
    switch (check) {
        case 7:
            console.log(`${check} is Prime Number`);
            break;
        default:
            console.log(`${check} is not Prime Number`);
    }

    // 4.
    function findSum(N: number) {
        let sum = 0;

        for (let i = 1; i <= N; i++) {
            sum += i;
            console.log(sum);
        }

        return sum;
    }

    const result1 = findSum(5);
    console.log(`Jumlah dari angka 1 hingga 5 adalah ${result1}`);

    const result2 = findSum(3);
    console.log(`Jumlah dari angka 1 hingga 3 adalah ${result2}`);

    // 5.
    function findFactorial(N: number) {
        let sum = 1;

        for (let i = 1; i <= N; i++) {
            sum *= i;
            console.log(sum);
        }

        return sum;
    }
    console.log(findFactorial(6));

    // 6.
    function fib(n: number) {
        let a = 0,
            b = 1,
            c,
            i;

        if (n == 0) return a;

        for (i = 2; i <= n; i++) {
            c = a + b;
            console.log(i);
            console.log(a);
            console.log(b);
            console.log(c);
            a = b;
            b = c;
        }
        return b;
    }

    console.log(fib(15));
}
Excercise();
