document.addEventListener("DOMContentLoaded", function () {
    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture');
    var images = document.querySelectorAll('.slider li');
    var visibleElement = 0;

    function slideNextImage() {
        next.addEventListener('click', function (e) {
            images[visibleElement].classList.remove("visible");
            visibleElement++;
            if (visibleElement >= images.length) {
                visibleElement = 0;
            }
            images[visibleElement].classList.add("visible");
        });
    }

    function slidePreviousImage() {
        prev.addEventListener('click', function (e) {
            images[visibleElement].classList.remove("visible");
            visibleElement--;
            if (visibleElement < 0) {
                visibleElement = images.length-1;
            }
            images[visibleElement].classList.add("visible");
        });
    }

    function init() {
        slideNextImage();
        slidePreviousImage()
    }

    init();
});