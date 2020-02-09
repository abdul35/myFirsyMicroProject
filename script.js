
const header__btn = document.querySelector(".header__btn"),
    block__item = document.querySelector(".block__item"),
    emailInput = document.querySelector("#email-input"),
    emailTitle = document.querySelector(".email-title"),
    btnAdd = document.querySelector(".btn-add");
    
console.log(document.querySelectorAll("span"));



    




/*
<div class="form__fields">
    <input type="text" class="input-name" placeholder="Наименования">
    <input type="text" class="input-count" placeholder="Количество">
    <input type="text" class="input-price" placeholder="Цена">
    <div class="view-amount">
        <span class="view-amount__title">Сумма</span>
        <span class="view-amount__sum"></span>
    </div>
</div>
*/ 














emailInput.addEventListener("focus", () => {
    emailInput.setAttribute("placeholder",""); 
    // emailTitle.textContent = "E-mail для отправки чека";
    emailTitle.classList.add("email-title-act");
    // emailTitle.style.display  = "block";
});

emailInput

btnAdd.addEventListener("click", event => {
    event.preventDefault();
    const target = event.target;


});















