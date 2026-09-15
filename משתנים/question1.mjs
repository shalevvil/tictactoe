import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output })

let age = await rl.question('what is your age: ')
age = number(age)
let b = number.isNaN(age)
if (b === true){
    console.log('מספר לא חוקי')
}
else {
    let a = age >= 12

    if (a === true){
        console.log('ברוך הבא')
    }
    else {
        console.log('איו כניסה')
    }
}

rl.close()