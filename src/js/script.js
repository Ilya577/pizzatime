jQuery(document).ready(function ($) {

$('.best-pizza-main__btn').on('click', function() {
    $('.popup-menu').removeClass('none');
    $('body').addClass('no-scroll')
})

$('.popup-menu__close').on('click', function() {
    $('.popup-menu').addClass('none');
    $('body').removeClass('no-scroll')
})


$('.menu-product-order__button').on('click', function() {
    $('.popup-order').removeClass('none');
    $('body').addClass('no-scroll')
})

$('.popup-order__close').on('click', function() {
    $('.popup-order').addClass('none');
    $('body').removeClass('no-scroll')
})    




var removeChildren = function(item){
  while(item.firstChild){
      item.removeChild(item.firstChild)
  }
}


 let buy = document.querySelectorAll(".menu-product-order__button");
 let name = document.querySelector(".popup-order__name");
 //let price = document.querySelector(".popup-order__price");
 //let size = document.querySelector(".popup-order__size");
 let img = document.querySelector(".popup-order__img")
 for ( let i = 0; i<buy.length; i++ ){
    let cartName = document.createElement('div');
    //let cartPrice = document.createElement('div');
    //let cartSize = document.createElement('div');
    let cartImg = document.createElement('img');

   buy[i].onclick = function(e){
    
    cartName.innerHTML = e.target.dataset.title;

    cartImg.src = e.target.dataset.src

    cartImg.style.width = "186px"

    cartImg.style.height = "114px"

   // cartPrice.innerHTML = e.target.dataset.price + ' P';

   // cartSize.innerHTML = e.target.dataset.size;

 $('.popup-order__close').on('click', function() {
   removeChildren(name)
  // removeChildren(price)
  // removeChildren(size)
   removeChildren(img)
  })
 

    name.appendChild(cartName);
   //price.appendChild(cartPrice);
    //size.appendChild(cartSize);
    img.appendChild(cartImg);

   }
   
 }


var link = document.getElementsByClassName("menu__item");
var active = document.getElementsByClassName('menu__item_active');

for (i = 0; link.length > i; i++) {
  link[i].onclick = function() {
    var currentActive = active[0];
    currentActive.classList.remove("menu__item_active")
    this.classList.add("menu__item_active");  
  }; 
}



});




