type TOrder = 'Pizza' | 'Soups' | 'Salad' | 'Pasta' | 'Risottos' | 'Seafood';

class FoodOrderQueue {
    private queue: string[] = [];
    private isProcessing: boolean = false;
    private currentTimeout: number | null = null;
    private time: number = -Infinity;

    addOrder(input?: TOrder): void {
        if (typeof input != 'string')
            throw new Error(`${Error}: input must be 'string'`);

        const orders = input[0].toUpperCase() + input.slice(1).toLowerCase();
        this.queue.push(orders);
    }

    printOrder(): void {
        const p = `Total ${this.queue.length} Order's:\n`;
        const spacer = '\n' + '='.repeat(p.length) + '\n';
        const print = `${spacer}${p}${this.queue.join('\n')}`;
        return console.log(print, spacer);
    }

    async processOrder(): Promise<void> {
        this.isProcessing = true;
        while (this.queue.length > 0) {
            const queueOrder = this.queue.shift();

            await this.randomDelay();

            const print = `Processing order: ${queueOrder}, Done in ${this.time}s`;

            console.log('='.repeat(print.length) + '\n');
            console.log(print);
            console.log('\n' + '='.repeat(print.length));
        }
        console.log(`\nComplete Processing order in ${this.currentTimeout}s\n`);

        this.stopOrderProcessing();
        this.isProcessing = false;
    }

    private async randomDelay() {
        const delay = Math.floor(Math.random() * 10 + 1);
        this.time = delay;
        await new Promise<void>(
            (resolve) =>
                (this.currentTimeout = setTimeout(resolve, delay * 1000))
        );
    }

    private clearCurrentTimeout(): void {
        if (this.currentTimeout !== null) {
            clearTimeout(this.currentTimeout);
            this.currentTimeout = null;
        }
    }

    private stopOrderProcessing(): void {
        this.clearCurrentTimeout();
        this.isProcessing = false;
    }
}

export default FoodOrderQueue;
