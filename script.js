// https://bitbucket.org/flamingo_web/zkip/src/master/
const btnAdd   = document.querySelector(".btn-add"),
    emailInput = document.querySelector("#email-input"),
    emailTitle = document.querySelector(".email-title"),
    commonSum  = document.querySelector('#general-sum'),
    btnWrite   = document.querySelector(".btn-write"),
    app        = document.querySelector(".app");
    
const obj = {
    elemId :  0,
    count  :  0,
    price  :  0, 
    currRowCount : 0,
    currRowPrice : 0,
    currBtnDelete: 0,
    inpShowSum : null,
    renderInputs () {
        let div = document.createElement('div')
        div.classList.add('form__fields')
        div.setAttribute('data-id', this.elemId)
        
        const template = `
                <input type="text" class="input-name">
                <span class="in-title">Наименования</span>

                <input type="text" class="input-count inp-num">
                <span class="ic-title">Количество</span>

                <input type="text" class="input-price inp-num" >
                <span class="ip-title">Цена</span>
                
                <div class="view-amount">
                    <span class="view-amount__title"></span>
                    <input class="view-amount__sum" type="text" value='' disabled placeholder="">
                </div>
                <img src="./icons8-material-outlined.svg" alt="" class="trash">
                `;
                
        div.innerHTML = template
        app.before(div)

        this.showRes(div)
        this.deleteRow(div)
        this.calcCommonSum(div)
        this.elemId++
        div.setAttribute('data-id', this.elemId)

    },
    
    showRes (template) {
 
        template.addEventListener('input', event => {
            
            target = event.target
            if (target.classList.contains('input-count')) {
                this.count = +target.value
                this.currRowCount = target.parentElement.dataset.id   
            }
            else if (target.classList.contains('input-price')){
                this.price = +target.value
                this.currRowPrice = target.parentElement.dataset.id
                this.inpShowSum = target.parentElement.querySelector('.view-amount .view-amount__sum')

                if (this.currRowPrice == this.currRowCount)
                    this.inpShowSum.value = +this.count * this.price

            }
            
        })

    },

    deleteRow (template) {
        this.currBtnDelete = template.querySelector('.trash')
        this.currBtnDelete.addEventListener('click', event => {
            event.target.parentElement.remove()
        })
    },
    sum:0,
    
    calcCommonSum (template) {
        template.addEventListener('input', e => {
            this.sum += +e.target.parentElement.querySelector('.view-amount__sum').value
            if (this.sum) 
                commonSum.textContent = this.sum
        })

    }

}; // end obj



btnAdd.addEventListener("click", event => {
    event.preventDefault();
    obj.renderInputs()

    emailInput.addEventListener("focus", () => {
        emailInput.setAttribute("placeholder", "");
        emailTitle.textContent = "E-mail для отправки чека";
        emailTitle.classList.add("email-title-act");
        emailTitle.style.display = "block";
    });
    
    emailInput.addEventListener("blur", () => {
        emailInput.setAttribute("placeholder", "E-mail для отправки чека");
        emailTitle.classList.remove("email-title-act");
        emailTitle.style.display = "none";
    });
});
