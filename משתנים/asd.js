import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let grade = Number(await rl.question("checkNumber: "));

if (grade > 90) {
    console.log("positive");
} else if (grade >- 60) {
    console.log("negative");
} else if (grade >+ 0) {
    console.log("zero");
}

rl.close();
process.exit(0);