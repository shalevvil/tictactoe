import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let num1 = Number(await rl.question("הכנס מספר ראשון: "));
let num2 = Number(await rl.question("הכנס מספר שני: "));

let sum = num1 + num2;
let product = num1 * num2;

if (product / sum === 2) {
    console.log("זה מספר קסם");
} else {
    console.log("זה לא מספר קסם");
}

rl.close();