// JavaScript source code

/*document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('nav');
    let btn = document.getElementsByClassName('navbtn');

    window.addEventListener('resize', function() {
        if (this.window.innerWidth <= 700) {
            nav.classList.remove('hide');
            btn.classList.add('hide');
            nav.style.float = 'none';
        } else {
            nav.classList.add('hide');
            btn.classList.remove('hide');
        }
    });
});*/

// For "about us" page
let barab = document.getElementById("arab"); // زر الترجمة الى العربية
let beng = document.getElementById("eng"); // زر الترجمة الى الانجليزية
let ara = document.querySelector(".ar"); // النص العربي
let eng = document.querySelector(".en"); // النص الانجليزي

barab.onclick = function () { // عند الضغط على الزر العربي
    ara.classList.remove("hide"); // إظهار النص العربي
    eng.classList.add("hide"); // اخفاء النص الانجليزي
    beng.classList.remove("hide"); // إظهار الزر الانجليزي
    this.classList.add("hide"); // اخفاء زر العربي
}

beng.onclick = function () { // عند الضغط على الزر الانجليزي
    ara.classList.add("hide"); // اخفاء النص العربي
    eng.classList.remove("hide"); // اظهار النص الانجليزي
    this.classList.add("hide"); // اخفاء الزر الانجليزي
    barab.classList.remove("hide"); // اظهار الزر العربي
}
