function updateButton(){
   const button = document.querySelector(".js-button");
    button.innerHTML = "Loading...";
   setTimeout(function() {
    button.innerHTML ="Finished";
   }, 1000);
}

document.querySelector(".js-button")
.addEventListener('click', () => {
    updateButton();
})

function updateButton2(){
    const button = document.querySelector(".js-button-cart");
    button.innerHTML = "Added!";
    setTimeout(function(){
        button.innerHTML = "Add to cart";
    }, 2000);
}

document.querySelector(".js-button-cart")
.addEventListener('click', () => {
    updateButton2();
})