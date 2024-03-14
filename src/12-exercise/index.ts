/* 01. Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

● Example 1:
○ Input: nums = [3,2,3]
○ Output: 3

● Example 2:
○ Input: nums = [2,2,1,1,1,2,2]
○ Output: 2 */

const MajorityElement = (nums: number[]): number => {
    let majority = 0;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            majority = num;

            count = 1;
        } else if (majority === num) {
            count += 1;
        } else {
            count -= 1;
        }
    }

    return majority;
};

const arrNum_1 = [3, 2, 3];
const arrNum_2 = [2, 2, 1, 1, 1, 2, 2];
const arrNum_3 = [1, 1, 4, 3, 1, 9, 9];

console.log(MajorityElement(arrNum_1));
console.log(MajorityElement(arrNum_2));
console.log(MajorityElement(arrNum_3));

/* 02. Create a function to convert roman numeral to integer.
● Example 1:
○ Input: s = "III”
○ Output: 3
○ Explanation: III = 3.

● Example 2:
○ Input: s = "LVIII"
○ Output: 58
○ Explanation: L = 50, V= 5, III = 3.

● Example 3:
○ Input: s = "MCMXCIV"
○ Output: 1994
○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4 */

const RomanToInteger = (input: string): number => {
    let result = 0;

    const roman = input.toUpperCase();

    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    } as const;

    if (input === '' || input == null || input == undefined) return -1;

    for (let idx = 0; idx < input.length; idx++) {
        switch (roman[idx]) {
            case 'I':
                result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
            default:
                return -1;
        }

        if (
            idx > 0 &&
            romanNumerals[roman[idx]] > romanNumerals[roman[idx - 1]]
        ) {
            result -= 2 * romanNumerals[roman[idx - 1]];
        }
    }

    return result;
};

console.log(RomanToInteger('III'));
console.log(RomanToInteger('LVIII'));
console.log(RomanToInteger('MCMXCIV'));

// 03. Generate integer numRows

const IntegerNumRows = (numRows: number): number[][] => {
    const pascal = [[1]];

    if (numRows === 1) return pascal;

    for (let idx = 1; idx < numRows; idx++) {
        pascal.push([]);
        pascal[idx][0] = 1;
        pascal[idx][pascal[idx - 1].length] = 1;
        for (let i = 0; i < pascal[idx - 1].length; i++) {
            pascal[idx][i + 1] =
                pascal[idx - 1][i] + pascal[idx - 1][i + 1] || 1;
        }
    }

    return pascal;
};

console.log(IntegerNumRows(5));

/* 04. You are given an array prices where prices[i] is the price of a given stock on the ith day.
● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
day in the future to sell that stock.
● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
return 0.

● Example 1:
○ Input: prices = [7,1,5,3,6,4]
○ Output: 5
○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
sell.

● Example 2:
○ Input: prices = [7,6,4,3,1]
○ Output: 0
○ Explanation: In this case, no transactions are done and the max profit = 0. */

const MaxProfit = (prices: number[]): number => {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];

            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
};

const prices_1 = [7, 1, 5, 3, 6, 4];
const prices_2 = [7, 6, 4, 3, 1];

console.log(MaxProfit(prices_1));
console.log(MaxProfit(prices_2));

const tested = Array.from(
    { length: Math.ceil(prices_1.length / 2) },
    (_, idx) => prices_1.slice(idx * 2, idx * 2 + 2)
);

let min = Infinity;
let max = -Infinity;
