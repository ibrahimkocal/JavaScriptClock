let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");

let myNameInput = prompt("Adınızı giriniz: ");
myName.innerHTML = myNameInput;

const date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

myClock.innerHTML = `${hour} : ${minute} : ${second} `


