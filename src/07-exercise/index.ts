export type SO = {
    a: string | number;
};

export type SE_1 = {
    a?: number;
    b?: number;
};

export type SE_2 = {
    a?: number;
    c?: number;
};

export const SampleObject_1 = {
    a: 1,
};

export const SampleObject_2 = {
    a: 2,
};

export const SampleObject_3 = {
    a: 'Hello',
};

export const IntersectionSample_1 = {
    a: 1,
    b: 2,
};

export const IntersectionSample_2 = {
    a: 1,
    c: 3,
    z: 0,
};

// 01. Chech Equal

function CheckEqual(input: SO[]) {
    const container = input.map((val) => val.a);

    return container.every((val) => val === container[0]);
}

const checkObject_1 = CheckEqual([SampleObject_1, SampleObject_2]);
const checkObject_2 = CheckEqual([SampleObject_3, SampleObject_1]);
const checkObject_3 = CheckEqual([SampleObject_1, SampleObject_1]);

console.log(checkObject_1, checkObject_2, checkObject_3);

// 02. Intersection Object

interface Iobj {
    [k: string]: number;
}

function IntersectionValue(input1: Iobj, input2: Iobj) {
    const val = Object.keys(input1).filter((key) => input2[key]);
    console.log(val);
    const value = Object.fromEntries(val.map((key) => [key, input1[key]]));
    return value;
}

const checkIntersection = IntersectionValue(
    IntersectionSample_1,
    IntersectionSample_2
);

console.log(checkIntersection);

// 03.

const arrObj_1 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' },
];

const arrObj_2 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' },
];

interface Fucker {
    name: string;
    email: string;
}

function Merger(input1: Fucker[], input2: Fucker[]) {
    const container = input1.concat(input2);

    const maps = new Map<string, Fucker>();

    container.forEach((student) => {
        const email = student.email;

        if (!maps.has(email)) {
            maps.set(email, student);
        }
    });

    const result = Array.from(maps.values());

    return result;
}

const merging = Merger(arrObj_1, arrObj_2);

console.log(merging);

interface objeeeeeeeect {
    name: string;
    age: number;
}

// 0h.
function Reversessssssssssssssssssssss(input: objeeeeeeeect[]) {
    const entr = Object.entries(input[0]);

    const loob = entr.map((el) => el.reverse());

    const value = Object.fromEntries(loob);

    console.log(value);

    return value;
}

const ibnoe = {
    name: 'ibnu',
    age: 20,
};

console.log(Reversessssssssssssssssssssss([ibnoe]));

// 05. Factorial

function Fucktorialllllllllllllllllllllllllllllllllll(input: number): number {
    if (input === 0 || input === 1) {
        return 1;
    } else {
        return input * Fucktorialllllllllllllllllllllllllllllllllll(input - 1);
    }
}

console.log(Fucktorialllllllllllllllllllllllllllllllllll(5));

function Segi3(h: number) {
    for (let idx = 1; idx <= h; idx++) {
        console.log('x'.repeat(idx));
    }

    console.log('='.repeat(h + 1));

    for (let idx = h; idx >= 1; idx--) {
        console.log('o'.repeat(idx));
    }

    for (let idx = 1; idx <= h; idx++) {
        console.log(' '.repeat(h + 1 - idx) + '0'.repeat(idx));
    }

    console.log('='.repeat(h + 1));

    for (let idx = h; idx >= 1; idx--) {
        console.log(' '.repeat(h + 1 - idx) + 'x'.repeat(idx));
    }
}
Segi3(5);
