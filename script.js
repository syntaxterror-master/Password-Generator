const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
  "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
  "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">","."
  ,"?",
"/"];

let length = 15


let maincontainerEl = document.getElementById("main-container")
let headingEl = document.getElementById("heading-el")
let sloganEl = document.getElementById("slogan-el")
let breakLine = document.getElementById("break-line")
let passwordContainer = document.getElementById("password-container")
let toggleOn = document.getElementById("toggle-on")
let toggleOff = document.getElementById("toggle-off")
let firstPassword = document.getElementById("password-first")
let secondPassword = document.getElementById("password-second")


function generatePassword() {
   randomPasswordOne()
   randomPasswordTwo()
 }
 

function randomPasswordOne() {
  let passwordOne = ""
  for (let i = 0; i < length; i++) {
    let randomChars = Math.floor(Math.random() * 90)
    passwordOne += characters[randomChars]
}
firstPassword.innerText = passwordOne
 }





 function randomPasswordTwo() {
  let passwordTwo = ""
  for (let i = 0; i < length; i++) {
    let randomChars = Math.floor(Math.random() * 90)
  passwordTwo += characters[randomChars]
}
  secondPassword.innerText = passwordTwo
 }




function darkTheme() {
  toggleOff.classList.add("light-toggle")
  toggleOn.classList.remove("dark-toggle")
  maincontainerEl.classList.add("main-container-dark")
  headingEl.classList.add("heading")
  sloganEl.classList.add("slogan")
  breakLine.classList.add("break-line")
  passwordContainer.classList.add("password-container-dark")
}

function lightTheme() {
  toggleOff.classList.remove("light-toggle")
  toggleOn.classList.add("dark-toggle")
  maincontainerEl.classList.remove("main-container-dark")
  headingEl.classList.remove("heading")
  sloganEl.classList.remove("slogan")
  breakLine.classList.remove("break-line")
  passwordContainer.classList.remove("password-container-dark")
}


