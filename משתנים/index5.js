import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let word = await rl.question("הכנס מילה בת 5 תווים: ");

let chosenWord = "apple";

for (let i = 0; i < 5; i++) {
    if (word[i] === chosenWord[i]) {
        console.log("האות במקום " + (i + 1) + " נכונה");
    }
}

rl.close();