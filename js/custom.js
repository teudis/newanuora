// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,   
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
