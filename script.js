const $carousels = document.querySelectorAll('.js-carousel')

for (const $carousel of $carousels) {
    const carousel = new HeticCarousel($carousel)
}

const $image = document.querySelectorAll('.img')
for (let i = 0; i < $image.length; i++) {
    $image[i].style.backgroundImage = `url("image/image_0${i+1}.jpg")`
}

const key = () => {
    let screen = document.querySelector('.js-carousel')
    let keyResult = event.charCode
    if (keyResult == 102) {
        if (document.fullscreenElement == null) {
            screen.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }
}

const check = () => {
    let sibling = document.querySelectorAll('.sibling')
    for (let i = 0; i < sibling.length; i++) {
        if (document.fullscreenElement == null) {
            sibling[i].style.display = 'none'
        } else {
            sibling[i].style.display = 'flex'
        }
    }
}

window.addEventListener('keypress', key)
window.addEventListener('keypress', check)