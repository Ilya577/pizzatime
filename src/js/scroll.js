;(function(){
    var scrollToPizza = document.querySelector('#scroll-there'); 
        $('#scroll-pizza').on('click', function() {
            var selectedPosY = 0;
            while (scrollToPizza != null) {
                selectedPosY += scrollToPizza.offsetTop;
                scrollToPizza = scrollToPizza.offsetParent;
            }
           window.scrollTo({
           top: selectedPosY,
           behavior: "smooth"
           });
        })

        $('.popup-menu__pizza').on('click', function() {
            $('.popup-menu').addClass('none');
            $('body').removeClass('no-scroll')
            var selectedPosY = 0;
            while (scrollToPizza != null) {
                selectedPosY += scrollToPizza.offsetTop;
                scrollToPizza = scrollToPizza.offsetParent;
            }
           window.scrollTo({
           top: selectedPosY,
           behavior: "smooth"
           });
        })
})();