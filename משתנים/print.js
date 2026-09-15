//משימה שנייה:
//א. יש ליצור פונקציה המדפיסה משתנה
//ב. יש לשנות את הפונקציה ככה שתדפיס את המשתנה רק אם הוא מספר, אחרת היא תדפיס שגיאה
function print(params) {
params = Number.parseInt(params)
    let isNaN = Number.isNaN(params)
 if (true == isNaN) {
    console.log("שגיאה")
}
else{
    console.log(params)
}
 }
let params = "shalom"
print (params)