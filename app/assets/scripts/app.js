const btns = document.querySelectorAll('.header__nav__tab a');

// Smooth Scroll

function smoothScroll(e) {
    e.preventDefault();
    const targetCoords = document
        .querySelector(`#${e.target.dataset.link}`)
        .getBoundingClientRect();

    window.scroll({
        top: targetCoords.y,
        left: 0,
        behavior: 'smooth'
    });
}

btns.forEach((btn) => btn.addEventListener('click', smoothScroll));

// Google Map js implemention

function myMap() {
    var mapCanvas = document.getElementById('map');
    var myCenter = new google.maps.LatLng(51.508742, -0.12085);
    var mapOptions = {
        center: myCenter,
        zoom: 5
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}
// nav-bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-50px';
    }
    prevScrollpos = currentScrollPos;
};

// Responsive navbar

// Products Slide

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

