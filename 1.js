//

window.onload = function () {
    var scrolled;
    var timer;


    document.getElementById('top').onclick = function(){
        scrolled = window.pageYOffset;
        // window.scrollTo(0,0);
        scrollToTop();

    }
    function scrollToTop () {
        if (scrolled > 0)   {
            window.scrollTo(0, scrolled);
            scrolled = scrolled -100; //100 скорость прокрутки
            timer = setTimeout(scrollToTop, 20); //20 плавность прокрутки
        }
        else {
            clearTimeout (timer);
            window.scrollTo(0,0);
        }
    }
}