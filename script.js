const $carousels = document.querySelectorAll('.js-carousel')

for(const $carousel of $carousels) {
    const carousel = new HeticCarousel($carousel)
}

const $image = document.querySelectorAll('.img')
for (let i = 0; i < $image.length; i++) {
    $image[i].style.backgroundImage = `url("image/image_0${i+1}.jpg")`
}
