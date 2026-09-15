import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import console from 'node:console';

const rl = readline.createInterface({ input, output })

let number = await rl.question(':רפסמ רחבת  ')
number = Number(number)
let c = number.isnan(number)
if (c === true){
    console.log('please enter a number')
}
else {
    
}
rl.close()