// 01. Create a function to convert Excel sheet column title to its corresponding column number.

function converExcelNum(input: string) {
    let result = 0;
    for (let idx = 0; idx < input.length; idx++) {
        result *= 26;
        result += input[idx].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}

console.log(converExcelNum('AAA'));
console.log('AA'.charCodeAt(1));

// 02. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const numArr_1: number[] = [2, 2, 1];
const numArr_2: number[] = [1, 2, 1, 2, 4, 5];
const numArr_3: number[] = [1];
const numArr_4: number[] = [];

const Integers = (input: number[]): number => {
    for (let idx = 0; idx < input.length; idx++) {
        let result = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[idx] == input[i]) {
                result++;
            }
        }

        if (result === 1) {
            return input[idx];
        }
    }

    if (input.length === 1) {
        return input[0];
    }

    return -1;
};

console.log(Integers(numArr_1));
console.log(Integers(numArr_2));
console.log(Integers(numArr_3));
console.log(Integers(numArr_4));

// 03. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function Anagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    let value_s = s
        .split('')
        .map((char) => char.charCodeAt(0))
        .reduce((a, b) => a + b, 0);
    let value_t = t
        .split('')
        .map((char) => char.charCodeAt(0))
        .reduce((a, b) => a + b, 0);

    if (value_s != value_t) return false;

    return true;
}

console.log(Anagram('anagram', 'nagaram'));
console.log(Anagram('maam', 'mama'));
console.log(Anagram('rat', 'car'));

// 04. You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.

// function climbStairs(n: number): number {
//     return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);
// }

function climbStairs(n: number): number {
    let dp: number[] = [1, 1];
    // dp[0] = 1;
    // dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(climbStairs(2), 'staircase');
