const header__btn = document.querySelector(".header__btn"),
    block__item = document.querySelector(".block__item"),
    emailInput = document.querySelector("#email-input"),
    emailTitle = document.querySelector(".email-title");


emailInput.addEventListener("focus", () => {
    emailInput.setAttribute("placeholder",""); 
    emailTitle.textContent = "E-mail для отправки чека";
});


