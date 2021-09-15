jQuery(document).ready(function ($) {
var menu = document.querySelector('.menu');
if(menu===null){
    return;
}

var removeChildren = function(item){
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}

var updateChildren = function(item,children){
removeChildren(item)
for(var i = 0;i < children.length;i++){
    item.appendChild(children[i]);
}
};

let menuProducts = menu.querySelector('.menu-products');
let correct = menu.querySelector('.menu__correction');
let menuItems = menu.querySelectorAll('.menu-product')

correct.addEventListener('click', function(e){
let target = e.target
var item = mylib.closestItemByClass(target, 'menu__item');

if(item === null || item.classList.contains(".menu__item_active")){
    return;
}

e.preventDefault();
var filterValue = item.getAttribute('data-filter');
//var previousBtnActive = correct.querySelector(".menu__item.menu__item_active")

if(filterValue === "all"){
updateChildren(menuProducts, menuItems)
return;
}

var filterItems = [];
for(var i = 0 ;i <menuItems.length ; i++){
var current = menuItems[i];
if(current.getAttribute('data-product') === filterValue){
    filterItems.push(current);
}
}
updateChildren(menuProducts,filterItems)
});
});
