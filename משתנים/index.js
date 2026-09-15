function subtract(number1, number2) {
    let result = number1 - number2
    if (result < 0){
        console.log('מספר שלילי')
    }
    return result
}

let number1 = 2;
let number2 = 1;
let result = subtract(number1, number2)
console.log(result)