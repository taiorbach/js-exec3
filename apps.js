
console.log('age')
console.log('Hello')

let age = document.getElementById('age')
let Hello = document.getElementById('Hello')
function calculate(){
    
const ageValue = age.value

if(age > 6 && age < 11  ){
    document.getElementById("Hello").value =  "שלום ילד"
    console.log("שלום ילד")
    } 
    else if(age >11 && age <= 13 ){
        document.getElementById("Hello").value =  "שלום מתבגר"
        console.log("שלום מתבגר")
    }
    else if(age > 13 && age <18 ){
        document.getElementById("Hello").value =  "שלום נער"
        console.log("שלום נער")
    }
    else if(age >= 18 ){
        document.getElementById("Hello").value =  "שלום בגיר"
        console.log("שלום בגיר")
    }


}
