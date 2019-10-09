let cross = document.querySelector(`.cross`);
let prod = document.querySelector(`.products`);
let cross1 = document.querySelectorAll(`.cross`)[1];
let prod1 = document.querySelectorAll(`.products`)[1];
let basket = document.querySelector(`.buyerBasket`);
let ordTotal = document.getElementById(`orderTotal`);
let plus = document.querySelectorAll(`.plusMinus`)[1];
let whiteStar = document.querySelector(`.whiteStar`);
let animationBuy = document.querySelector(`.buyNow`);
let crossBuy = document.querySelector('.crossBuy');
console.log(crossBuy);

crossBuy.onclick = function () {
    animationBuy.style.animationName = `reversAnimBuy`;
    animationBuy.style.animationFillMode = `forwards`;
    crossBuy.style.display = `none`;
}

whiteStar.onclick = function () {
    animationBuy.style.animationPlayState = `running`;
    crossBuy.style.display = `block`;
};

cross.onclick = function () {
    prod.style.display = 'none';
    basket.style.height = `368px`;
    ordTotal.innerHTML = `ORDER TOTAL 400$`;
};

cross1.onclick = function () {
    prod1.style.display = 'none';
    basket.style.height = `268px`;
    ordTotal.innerHTML = `ORDER TOTAL 6299$`;
};