const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
  "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
  "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">","."
  ,"?",
"/"];

let length = 0
let maxLength = 23
let minLength = 6


let maincontainerEl = document.getElementById("main-container")
let headingEl = document.getElementById("heading-el")
let sloganEl = document.getElementById("slogan-el")
let breakLine = document.getElementById("break-line")
let passwordContainer = document.getElementById("password-container")
let toggleOn = document.getElementById("toggle-on")
let toggleOff = document.getElementById("toggle-off")
let firstPassword = document.getElementById("password-first")
let secondPassword = document.getElementById("password-second")
let lengthEl = document.getElementById("length-el")


function generatePassword() {
   randomPasswordOne()
   randomPasswordTwo()
   lengthEl.value = ""
 }

 function copyPasswordOne() {
  firstPassword.select()
  firstPassword.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(firstPassword.value)


 }

 function copyPasswordTwo() {
  secondPassword.select()
  secondPassword.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(secondPassword.value)

 }
 
function setPasswordLength() {
  length = lengthEl.value
} 

function randomPasswordOne() {
  setPasswordLength() 
  let passwordOne = ""

  if (length < minLength) {
    firstPassword.value = "Password is to short!"
    setTimeout(() => {
      firstPassword.value = ""
    }, 2000)
  } else if (length > maxLength) {
    firstPassword.value = "Password is to long!"
    setTimeout(() => {
      firstPassword.value = ""
    }, 2000)
  } else {
    for (let i = 0; i < length; i++) {
      let randomChars = Math.floor(Math.random() * characters.length)
    passwordOne += characters[randomChars]
  }
  firstPassword.value = passwordOne
  firstPassword.addEventListener("click", (() => {
    copyPasswordOne()
    firstPassword.value = "Password Copied!"
    setTimeout(() => {
      firstPassword.value = passwordOne
    }, 2000)
  }))
  }
 }


 function randomPasswordTwo() {
  setPasswordLength() 
  let passwordTwo = ""

  if (length < minLength) {
    secondPassword.value = "Password is to short!"
    setTimeout(() => {
      secondPassword.value = ""
    }, 2000)
  } else if (length > maxLength) {
    secondPassword.value = "Password is to long!"
    setTimeout(() => {
      secondPassword.value = ""
    }, 2000)
  } else {
    for (let i = 0; i < length; i++) {
      let randomChars = Math.floor(Math.random() * characters.length)
    passwordTwo += characters[randomChars]
  }
  secondPassword.value = passwordTwo
  secondPassword.addEventListener("click", (() => {
    copyPasswordTwo()
    secondPassword.value = "Password Copied!"
    setTimeout(() => {
      secondPassword.value = passwordTwo
    }, 2000)
  }))
  }
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


