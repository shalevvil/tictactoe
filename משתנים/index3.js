import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let username = await rl.question("הכנס שם משתמש: ");

if (username[0] === "@") {
    console.log("שם משתמש תקין");
} else {
    console.log("שם משתמש לא תקין");
}

rl.close();