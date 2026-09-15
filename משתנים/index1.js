function checkString() {
    let password = "bAc46";

    let firstChar = Number(password[0]);
    let isFirstNumber = Number.isNaN(firstChar);

    let fourthChar = Number(password[3]);
    let fifthChar = Number(password[4]);

    if (isFirstNumber) {
        if (password[1] === "A") {
            if (!Number.isNaN(fourthChar) && !Number.isNaN(fifthChar)) {
                if (fourthChar + fifthChar === 10) {
                    console.log("סיסמה חוקית");
                } else {
                    console.log("המספרים לא שווים ל-10");
                }
            } else {
                console.log("אין שני מספרים בסוף");
            }
        } else {
            console.log("התו השני אינו A");
        }
    } else {
        console.log("התו הראשון הוא מספר");
    }
}

checkString();