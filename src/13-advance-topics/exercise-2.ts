type TOrder = 'Pizza' | 'Soups' | 'Salad' | 'Pasta' | 'Risottos' | 'Seafood';

export class FoodOrder {
    private queue: string[] = [];
    private isProcessing = false;
    private time: number = 0;

    addOrder(input?: TOrder) {
        if (typeof input != 'string')
            throw new Error('Input Error: input string');

        const orders = input[0].toUpperCase() + input.slice(1).toLowerCase();
        this.queue.push(orders);
    }

    printOrders(): void {
        const massage = `Total ${this.queue.length} in order's`;
        const spacer = '='.repeat(massage.length);
        const order = this.queue.join('\n');
        console.log(spacer);
        console.log(massage);
        console.log(order);
        console.log(spacer);
    }

    async processOrder(): Promise<void> {
        this.isProcessing = true;
        if (this.isProcessing) {
            while (this.queue.length > 0) {
                await this.processQueue().then((res) => console.log(res));
            }
        }
        console.log(`Completed order in ${this.time}s total.`);
    }

    private processQueue() {
        const times = Math.floor(Math.random() * 11);
        const process = this.queue.shift();
        const newPromise = new Promise((resolve, reject) =>
            setTimeout(() => {
                if (this.isProcessing) {
                    resolve(`Processing: ${process}, Done in ${times}s`);
                    this.time += times;
                } else reject('Error');
            }, times * 1000)
        );

        return newPromise;
    }
}
