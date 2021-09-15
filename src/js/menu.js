;(function(){
    var pItem = document.querySelector('.menu-products');
    if(pItem===null){
        return;
    }
    

    
    var changeProductsSize = function(target){
        var product = mylib.closestItemByClass(target, 'menu-product');
        var previousBtnActive = product.querySelector(".menu-product__btn.menu-product__btn_active");
        previousBtnActive.classList.remove('menu-product__btn_active');
        target.classList.add("menu-product__btn_active");  
    }
    

    var changeProductsPriceBySize = function(target){
      var product = mylib.closestItemByClass(target, 'menu-product');
      var productPrices = product.querySelector('.menu-product__price');
      var btnss = product.querySelectorAll(".menu-product__btn");
      productPrices.innerHTML = "";
    
      if (btnss[0].classList.contains('menu-product__btn_active')){
        productPrices.innerHTML = target.dataset.bigprice;
      }
      else if (btnss[1].classList.contains('menu-product__btn_active')){
         productPrices.innerHTML = target.dataset.mediumprice;
      }
      else if (btnss[2].classList.contains('menu-product__btn_active')){
         productPrices.innerHTML = target.dataset.lowprice;
      }
    }


    var changeInfo = function(target){
        var product = mylib.closestItemByClass(target, 'menu-product');
        var order = document.querySelector('.popup-order');

        var productPrice = product.querySelector('.menu-product__price').textContent;
        var productSize = product.querySelector('.menu-product__btn.menu-product__btn_active').textContent;

        order.querySelector('.popup-order__price-input').setAttribute('value', productPrice);
        order.querySelector('.popup-order__size-input').setAttribute('value', productSize);

        order.querySelector('.popup-order__price').textContent = productPrice;
        order.querySelector('.popup-order__size').textContent = productSize;
    }
    
    pItem.addEventListener('click', function(e){
    let target = e.target
   
    if(target.classList.contains("menu-product__btn")){
        e.preventDefault();
        changeProductsSize(target);
        changeProductsPriceBySize(target);
    }

    if(target.classList.contains("menu-product-order__button")){
        e.preventDefault();
        changeInfo(target)
    }

});
})();
