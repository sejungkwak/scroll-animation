var fromLeft = document.querySelectorAll('.leftDirection');
var fromRight = document.querySelectorAll('.rightDirection');

var windowHeight = document.documentElement.clientHeight;

function showVisible() {fromLeft.forEach(box => {
        if (box.getBoundingClientRect().top > 0 && box.getBoundingClientRect().bottom <windowHeight) {
            box.classList.remove('leftDirection');
        } else if (box.getBoundingClientRect().top < 0 || box.getBoundingClientRect().bottom > windowHeight) {
            box.classList.add('leftDirection');
        }
    });

    fromRight.forEach(box => {
        if (box.getBoundingClientRect().top > 0 && box.getBoundingClientRect().bottom < windowHeight) {
            box.classList.remove('rightDirection');
        } else if (box.getBoundingClientRect().top < 0 || box.getBoundingClientRect().bottom > windowHeight) {
            box.classList.add('rightDirection');
        }
    });
}

showVisible(); //without this the first boxes wouldn't be visible when the page is loaded.
window.onscroll = showVisible;
