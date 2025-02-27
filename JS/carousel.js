let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function moveToNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // 當到達最後一張，返回第一張
    }
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const offset = -currentIndex * 100; // 每次移動一個圖片的寬度
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// 自動播放
setInterval(moveToNextImage, 3000); // 每3秒切換一次圖片