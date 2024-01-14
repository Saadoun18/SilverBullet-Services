// For "Content 1" page
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let phone = document.querySelector(".phone");
let pay = document.querySelector(".pay");
let bnext = document.getElementById("next");

btn1.onclick = function () {
    phone.classList.remove("hide");
}
btn2.onclick = function () {
    phone.classList.remove("hide");
}
btn3.onclick = function () {
    phone.classList.remove("hide");
}
btn4.onclick = function () {
    phone.classList.remove("hide");
}
btn5.onclick = function () {
    phone.classList.remove("hide");
}
bnext.onclick = function () {
    pay.classList.remove("hide");
    this.classList.add("hide");
}