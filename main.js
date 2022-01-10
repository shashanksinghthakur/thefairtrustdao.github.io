/*window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80) {

        document.getElementById("header").blur();
    } else {

        document.getElementById("header").style.background = "#a0b3c1";
    }
}*/


var el = document.querySelectorAll(".rt-container ul > div");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}