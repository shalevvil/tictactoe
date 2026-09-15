import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let grade = Number(await rl.question("הכנס את הציון: "));

if (grade > 90) {
    console.log("עברת בהצטיינות");
} else if (grade >= 60) {
    console.log("עברת בהצלחה");
} else {
    console.log("נכשלת");
}

rl.close();
process.exit(0);