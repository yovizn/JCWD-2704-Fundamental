console.log(Example1(4));

function Example1(input: number) {
    const arr: never | string[] = [];

    for (let idx = 1; idx <= input; idx++) {
        let container = '';

        if (idx === 1) {
            container += idx;
        } else {
            for (let i = 1; i <= idx; i++) {
                if (i === input) {
                    container += i;
                } else {
                    container += i + ' ';
                }
            }
        }
        console.log(container);
        arr.push(container);
    }

    return arr;
}

const arrNum = [10, 55, 79, 32];

console.log(Example2(arrNum));

function Example2(input: number[]) {
    let maxValue = input[0];

    for (let idx = 0; idx < input.length; idx++) {
        // console.log(maxValue, input[idx]);

        // console.log(
        //     `idx = ${idx}, input: ${input[idx]} > maxValue: ${maxValue} = ${
        //         input[idx] > maxValue
        //     }`
        // );

        input[idx] > maxValue ? (maxValue = input[idx]) : undefined;
    }

    return maxValue;
}
