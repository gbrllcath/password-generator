const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

 // grab password1-el and password2-el , add .textContent to change in HTML
 // add onclick to generate-password-btn and copy-btn
 // Math.floor, Math.random and characters.length to generate random numbers of 15 length 
// add copy button function

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let passwordLength = 15
let password1 = ""    
let password2 = ""

function generatePassword() {
    for (let i=0; i < passwordLength; i++) {
        let randomIndex1 = Math.floor( Math.random() * characters.length )
        let randomCharacters1 = characters[randomIndex1]
        let randomIndex2 = Math.floor( Math.random() * characters.length )
        let randomCharacters2 = characters[randomIndex2]
        password1 += randomCharacters1
        password2 += randomCharacters2
    }
    password1El.textContent = password1
    password2El.textContent = password2
    password1 = ""
    password2 = ""
}

function copyPassword1() {
    navigator.clipboard.writeText(password1El.textContent)
}

function copyPassword2() {
    navigator.clipboard.writeText(password2El.textContent)
}
