;(function(){
window.mylib = {};

window.mylib.body = document.querySelector('body')

window.mylib.closestAttr = function (item,attr){
    var node = item;
    while(node){
        var attrValue = node.getAttribute(attr);
        if (attrValue) {
            return attrValue;
        }
        node = node.parentElement;
    }
    return null;
};
window.mylib.closestItemByClass = function(item,className){
    var node = item
    while(node){
        if (node.classList.contains(className)){
            return node;
        }
        node = node.parentElement;
    }
    return null
}

})();
