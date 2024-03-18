// const tryPromise = new Promise((resolve, reject) =>
//     setTimeout(() => {
//         const success = false;
//         if (success) resolve('success');
//         else reject('error');
//     }, 2000)
// );

import { FoodOrder } from './exercise-2';

// const asyncAwait = async () => {
//     const obj = {
//         satu: 1,
//         dua: 2,
//     };
//     console.log(obj.satu);
//     await tryPromise
//         .then((res) => console.log(res))
//         .catch((res) => console.log(res));
//     console.table(obj.dua);
// };

// asyncAwait();

interface ITodos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchWithAsync = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const user = await response.json();

        const response2 = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        const todos = await response2.json();
    } catch (e) {
        console.log((e as Error).message);
    }
};

fetchWithAsync();

const orderQueue = new FoodOrder();

orderQueue.addOrder('Pasta');
orderQueue.addOrder('Pizza');
orderQueue.addOrder('Risottos');
orderQueue.addOrder('Salad');
orderQueue.addOrder('Seafood');
orderQueue.addOrder('Soups');

orderQueue.printOrders();
orderQueue.processOrder();
