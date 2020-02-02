let nameProduct = document.querySelector(".name-product");

let block__item = document.querySelector(".block__item");
nameProduct.addEventListener("focus", event => {
    console.log("input-text");
    // nameProduct.classList.add("input-txt-anim");
});

// nameProduct.addEventListener("focus", event => {
//     event.preventDefault();
//     // alert("yes-focus")
//     console.log(event);    
//     

// });

// nameProduct.addEventListener("change", event => {
//     block__item.style.backgroundColor =  'white';
// })