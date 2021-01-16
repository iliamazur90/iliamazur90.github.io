document.addEventListener('DOMContentLoaded', () => {
    const images = new Array();
    console.log('Images preloaded')
    function preloadImages(...images) {
        images.forEach((image, i) => {
            image = new Image();
            image.src = preloadImages.arguments[i];
        });
    };

    // Предварительная загрузка нужных картинок 
    preloadImages(
        'images/back.png',
        'images/c6.png',
        'images/c7.png',
        'images/c8.png',
        'images/c9.png',
        'images/c10.png',
        'images/cA.png',
        'images/cJ.png',
        'images/cK.png',
        'images/cQ.png',
        'images/d6.png',
        'images/d7.png',
        'images/d8.png',
        'images/d9.png',
        'images/d10.png',
        'images/dA.png',
        'images/dJ.png',
        'images/dK.png',
        'images/dQ.png',
        'images/h6.png',
        'images/h7.png',
        'images/h8.png',
        'images/h9.png',
        'images/h10.png',
        'images/hA.png',
        'images/hJ.png',
        'images/hK.png',
        'images/hQ.png',
        'images/s6.png',
        'images/s7.png',
        'images/s8.png',
        'images/s9.png',
        'images/s10.png',
        'images/sA.png',
        'images/sJ.png',
        'images/sK.png',
        'images/sQ.png',
    );
});