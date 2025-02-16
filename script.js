const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
  "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
  "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">","."
  ,"?",
"/"];

let maincontainerEl = document.getElementById("main-container")
let headingEl = document.getElementById("heading-el")
let sloganEl = document.getElementById("slogan-el")
let breakLine = document.getElementById("break-line")
let passwordContainer = document.getElementById("password-container")
let toggleOn = document.getElementById("toggle-on")
let toggleOff = document.getElementById("toggle-off")


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
