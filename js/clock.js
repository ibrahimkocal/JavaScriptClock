let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");

let myNameInput = prompt("Adınızı giriniz: ");
myName.innerHTML = myNameInput;

function showTime(){
    const date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second: second;

    myClock.innerHTML = `${hour} : ${minute} : ${second} `;

    setTimeout(showTime, 1000);
}

showTime();

