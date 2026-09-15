function checkStrings() {
    let str1 = "abcde";
    let str2 = "abcde";

    let secondEqual = str1[1] === str2[1];
    let thirdEqual = str1[2] === str2[2];
    let fourthEqual = str1[3] === str2[3];

    if (secondEqual === true) {
        if (thirdEqual === true) {
            if (fourthEqual === true) {
                console.log("המחרוזות תקינות");
            }
            else {
                console.log("התו הרביעי לא שווה");
            }
        }
        else {
            console.log("התו השלישי לא שווה");
        }
    }
    else {
        console.log("התו השני לא שווה");
    }
}

checkStrings();