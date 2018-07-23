const btns = document.querySelectorAll('.header__nav__tab a');

function smoothScroll(e) {
    e.preventDefault();
    const targetCoords = document.querySelector(`#${e.target.dataset.link}`).getBoundingClientRect();

    window.scroll({
        top: targetCoords.y,
        left: 0,
        behavior: 'smooth'
    });
}

btns.forEach(btn => btn.addEventListener('click', smoothScroll));

// Google Map js implemention

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
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