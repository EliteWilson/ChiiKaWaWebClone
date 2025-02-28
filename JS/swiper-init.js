document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper", {
        loop: true, // 讓輪播循環播放
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1.2 },
            762: { slidesPerView: 2.5 },
            992: { slidesPerView: 3.5 }

        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 20, // 設定幻燈片之間的間距 (可依需求調整)
    });
});