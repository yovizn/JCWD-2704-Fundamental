/* 01. Create a code that could handle a queue on food ordering process, with this specification:
● Create a class to handle queuing process in a file.
● Create file to handle and execute queue class.
● Each queue process takes a random interval from 1-10 seconds.
● Clue : Use while & promise */

import FoodOrderQueue from './queue';

const queue = new FoodOrderQueue();

queue.addOrder('Pasta');
queue.addOrder('Pizza');
queue.addOrder('Risottos');
queue.addOrder('Salad');
queue.addOrder('Seafood');
queue.addOrder('Soups');

queue.printOrder();
queue.processOrder();
queue.printOrder();
