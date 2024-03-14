// 01.

class Student {
    names: string;
    emails: string;
    ages: number;
    scores: number;

    constructor(name: string, email: string, age: number, score: number) {
        this.names = name;
        this.emails = email;
        this.ages = age;
        this.scores = score;
    }
}

class Students {
    arrStudents: Student[];
    #score: number[];
    #age: number[];

    constructor(input: Student[]) {
        this.arrStudents = input;
        this.#score = input.map((santos) => santos.scores);
        this.#age = input.map((el) => el.ages);
    }

    Scores() {
        return {
            highest_score: Math.max(...this.#score),
            average_score: (
                this.#score.reduce((sum, curr) => sum + curr, 0) /
                this.#score.length
            ).toFixed(2),
            lowest_score: Math.min(...this.#score),
        };
    }

    Ages() {
        return {
            highest_age: Math.max(...this.#age),
            average_age: (
                this.#age.reduce((sum, curr) => sum + curr, 0) /
                this.#age.length
            ).toFixed(2),
            lowest_age: Math.min(...this.#age),
        };
    }
}

const student1 = new Student('Santos', 'santos@gmail.com', 18, 98);
const student2 = new Student('Carlos', 'carlos@gmail.com', 28, 68);
const student3 = new Student('Rahul', 'rahul@gmail.com', 38, 90);

const students = new Students([student1, student2, student3]);

console.log(students.Scores());
console.log(students.Ages());

// 02.
class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    #total: number;
    #product: string[];

    constructor() {
        this.#total = 0;
    }

    addToCart(product: Product[], qty: number) {
        if (product instanceof Product === false) {
            throw new Error('Product tidak ada');
        }
        const { name, price } = product;

        // // this.#product += this.#product.push(product.name);
        if (!product) {
            throw new Error('Tidak Ada Product');
        } else if (qty === 0) {
            throw new Error('Tidak Ada Quantity');
        } else {
            this.#total += price * qty;
            this.#product = name;
        }
        // const value = {
        //     semua_product: this.#product,
        //     total_harga: this.#total,
        // };
        // console.log(value);
        // return value;
    }

    ShowTotal() {
        if (!this.#total || this.#total === 0) {
            throw new Error('Ga ada yang di Add apalagi Totalnya');
        }

        const totalValue = `Total harga = ${Number(this.#total).toLocaleString(
            'id-Id',
            {
                style: 'currency',
                currency: 'IDR',
            }
        )}`;

        const productValue = this.#product;

        return {
            productValue,
            totalValue,
        };
    }

    CheckOut() {
        this.#total = 0;
        return `Selamat Pembayaran Anda Berhasil`;
    }
}

const product1 = new Product('2JZ-GTE', 248860000);
const product2 = new Product('SR20-DET', 110000000);
const product3 = new Product('SR20-DET', 134000000);

const transaction = new Transaction();

console.log(transaction.ShowTotal());

const checkOut = transaction.CheckOut();

console.log(checkOut);

console.log(transaction.ShowTotal());
