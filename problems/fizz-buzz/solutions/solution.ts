export function fizzBuzz(n: number): string[] {
    const output: string[] = [];
    for (let i = 1; i < n + 1; i++) {
        if (i % 15 === 0) {
            output.push("FizzBuzz")
        } else if (i % 5 === 0) {
            output.push("Buzz")
        } else if (i % 3 === 0) {
            output.push("Fizz")
        } else {
            output.push(i.toString())
        }
    }
    return output;
};