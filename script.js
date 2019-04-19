const $carousels = document.querySelectorAll('.js-carousel')

for (const $carousel of $carousels) {
    const carousel = new HeticCarousel($carousel)
}

const $image = document.querySelectorAll('.img')
for (let i = 0; i < $image.length; i++) {
    $image[i].style.backgroundImage = `url("image/image_0${i+1}.jpg")`
}

let screen = document.querySelector('.js-carousel')
const key = () => {
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
    let keyResult = event.key
    let sibling = document.querySelectorAll('.sibling')
    for (let i = 0; i < sibling.length; i++) {
        if (document.fullscreenElement == null ) {
            sibling[i].style.display = 'none'
            screen.style.cursor = 'none'
        } else {
            sibling[i].style.display = 'flex'
            screen.style.cursor = 'initial'
        }
    }
}

window.addEventListener('keypress', key)
window.addEventListener('keydown', check)