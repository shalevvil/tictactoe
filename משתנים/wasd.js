import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let grade = Number(await rl.question("checkNumber: "));

if (grade > 90) {
    console.log("Excellent");
} else if (grade >= 60) {
    console.log("passed");
} else {
    console.log("failed");
}

rl.close();
process.exit(0);