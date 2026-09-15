//משימה שלישית://

//יש ליצור פונקציית מחשבון אשר מקבלת מחרוזת שהיא חיבור או חיסור או כפל או חילוק
//ושני מספרים, הפונקציה עושה את הפעולה הנבחרת על שני המספרים//
function calculator(operation, num1, num2) {
    if (operation === "+") {
        return num1 + num2;
    }
    else if (operation === "-") {
        return num1 - num2;
    }
    else if (operation === "*") {
        return num1 * num2;
    }
    else if (operation === "/") {
        return num1 / num2;
    }
}

console.log(calculator("*", 10, 10)); 