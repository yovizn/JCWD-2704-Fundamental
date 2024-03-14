const ObjProduct_1 = {
    name: 'sepeda',
    color: 'Biru',
    prize: 20000,
};

const ObjProduct_2 = {
    name: 'Raket Badminton',
    color: 'Hitam',
    prize: 30000,
};

const Car = {
    brand: 'BMW',
    model: 'M1351 xDrive',
    prize: 800000000,
};

console.log(Car);

let user = {
    name: 'Santos',
    greet() {
        console.log('hello');
        return `hello ${this.name}`;
    },
};
let user2 = new Object();

console.log(user.greet());

const student_1 = {
    name: 'tyo',
    age: 25,
};

const student_2 = {
    name: 'tyo',
    age: 25,
};

const kelas_jswd = {
    size: 'xl',
    totalMurid: '2',
    student: [student_1, student_2],
};

const rawrrr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];

console.log(rawrrr[3][2][2][1]);

console.log(rawrrr.join().length);

const arrSantos = [1, 1, 1, [2, 2, [3, 3, [4, 5]]]];
