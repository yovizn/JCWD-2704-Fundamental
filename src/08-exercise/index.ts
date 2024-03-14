// 01.

class Player {
    name: string;
    health: number;
    power: number;

    constructor(n: string, h: number = 100, p: number = 10) {
        this.name = n;
        this.health = h;
        this.power = p;
    }

    hit(damage: number) {
        this.health -= this.health - damage > 0 ? damage : this.health;
    }

    useItem(item: { health: number; power: number }) {
        this.health += item.health;
        this.power += item.power;
    }

    showStats() {
        console.log(
            `${this.name} | (Health: ${this.health}) | (Power: ${this.power})`
        );
    }
}

class ShootingGame {
    #Player1: Player;
    #Player2: Player;

    constructor(player1: Player, player2: Player) {
        this.#Player1 = player1;
        this.#Player2 = player2;
    }

    getItems() {
        const random = Math.floor(Math.random() * 11);

        if (random < 5) {
            return {
                health: 10,
                power: 0,
            };
        } else {
            return {
                health: 0,
                power: 10,
            };
        }
    }

    start() {
        const randomStart = Math.floor(Math.random() * 11);
        while (this.#Player1.health > 0 && this.#Player2.health > 0) {
            const item1 = this.getItems();
            const item2 = this.getItems();

            this.#Player1.showStats();
            this.#Player2.showStats();

            if (this.#Player1.health <= 0 || this.#Player2.health <= 0) {
                this.#Player1.showStats();
                this.#Player2.showStats();
                break;
            } else {
                if (randomStart > 5) {
                    this.#Player1.hit(this.#Player2.power);
                    this.#Player2.hit(this.#Player1.power);
                } else {
                    this.#Player2.hit(this.#Player1.power);
                    this.#Player1.hit(this.#Player2.power);
                }
            }

            this.#Player1.useItem(item1);
            this.#Player2.useItem(item2);
        }

        if (this.#Player1.health <= 0) {
            this.#Player1.showStats();
            return `${this.#Player2.name} Wins!`;
        }
        if (this.#Player2.health <= 0) {
            this.#Player2.showStats();

            return `${this.#Player1.name} Wins!`;
        }
    }
}

const player_1 = new Player('El Santos Owhite');
const player_2 = new Player('Carlos Robertito');

const gameplay = new ShootingGame(player_1, player_2);

// console.log(gameplay.start());

// 02.

class Employee {
    names: string;
    ages: number;
    address: string;
    #working: number[] = [];
    #salary: number;
    #ot: number;

    constructor(
        name: string,
        age: number,
        add: string,
        salary: number,
        ot: number
    ) {
        this.names = name;
        this.ages = age;
        this.address = add;
        this.#salary = salary;
        this.#ot = ot;
    }

    workingHour(input: number) {
        if (input < 1 || input > 14) {
            return 'Jam kerja tidak sesuai';
        } else {
            this.#working.push(input);

            const output = this.#working.map(
                (l, idx) =>
                    `Hari Ke - ${
                        idx + 1
                    } bekerja selama ${l} jam,  dan Total: ${this.#working.reduce(
                        (a, b) => a + b
                    )} Jam `
            );

            return output[output.length - 1];
        }
    }

    calcWorkingHour() {
        const overtime = this.#working.reduce(
            (a, b) => (b > 6 ? a + (b - 6) * this.#ot : a),
            0
        );
        const normalHour =
            this.#working.reduce((a, b) => a + b, 0) * this.#salary - overtime;

        this.#salary += normalHour + overtime;

        const output = {
            name: this.names,
            age: this.ages,
            add: this.address,
            normal_hour: `${
                this.#working.reduce((a, b) => a + b, 0) -
                this.#working.reduce((a, b) => (b > 6 ? a + (b - 6) : a), 0)
            } jam = ${normalHour.toLocaleString('id-Id', {
                style: 'currency',
                currency: 'IDR',
            })}`,
            overtime_hour: `${this.#working.reduce(
                (a, b) => (b > 6 ? a + (b - 6) : a),
                0
            )} jam = ${overtime.toLocaleString('id-Id', {
                style: 'currency',
                currency: 'IDR',
            })}`,
            total_salary: this.#salary.toLocaleString('id-Id', {
                style: 'currency',
                currency: 'IDR',
            }),
        };

        return output;
    }
}

class Fulltime extends Employee {
    constructor(name: string, age: number, add: string) {
        super(name, age, add, 100000, 75000);
    }
}

class Parttime extends Employee {
    constructor(name: string, age: number, add: string) {
        super(name, age, add, 50000, 30000);
    }
}

const fulltime = new Fulltime('Toyo', 27, 'Jl. Totomomo Koco');
const parttime = new Fulltime('Tomo', 17, 'Jl. Yoyomomo Koco');

console.log(fulltime.workingHour(8));
console.log(fulltime.workingHour(8));
console.log(fulltime.workingHour(8));
console.log(fulltime.workingHour(9));
console.log(fulltime.workingHour(8));

console.log(fulltime.calcWorkingHour());
