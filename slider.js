var sliderWrapper = document.querySelector('.slider-wrapper');
var sliderButton = document.querySelector('.slider-button');
var sliderBar = document.querySelector('.slider-bar');

var sliderWidth = sliderWrapper.offsetWidth - sliderButton.offsetWidth;

sliderButton.addEventListener('mousedown', function(e) {
    var startX = e.clientX - sliderButton.offsetLeft;

    document.addEventListener('mousemove', moveSlider);
    document.addEventListener('mouseup', stopSlider);

    function moveSlider(e) {
        var newLeft = e.clientX - startX;

        if (newLeft < 0) {
            newLeft = 0;
        }

        if (newLeft > sliderWidth) {
            newLeft = sliderWidth;
        }

        sliderButton.style.left = newLeft + 'px';
        sliderWrapper.style.left = -newLeft / 5 + 'px';
    }

    function stopSlider() {
        document.removeEventListener('mousemove', moveSlider);
        document.removeEventListener('mouseup', stopSlider);
    }
});

sliderBar.addEventListener('click', function(e) {
    var newLeft = e.clientX - sliderBar.getBoundingClientRect().left - sliderButton.offsetWidth / 2;

    if (newLeft < 0) {
        newLeft = 0;
    }

    if (newLeft > sliderWidth) {
        newLeft = sliderWidth;
    }

    sliderButton.style.left = newLeft + 'px';
    sliderWrapper.style.left = -newLeft / 5 + 'px';
});