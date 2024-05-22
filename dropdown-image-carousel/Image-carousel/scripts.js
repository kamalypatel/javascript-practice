let currentSlide = 'one'

function next() {
    const nextArrow = document.querySelector('.right')

    nextArrow.addEventListener('click', () => {
        const currentSlideToHide = document.getElementById(currentSlide)
        currentSlideToHide.setAttribute('style', 'display: none;')

        if (currentSlide == 'one') {
            currentSlide = 'two'
        } else if (currentSlide == 'two') {
            currentSlide = 'three'
        } else if (currentSlide == 'three') {
            currentSlide = 'one'
        }

        const currentSlideToShow = document.getElementById(currentSlide)
        currentSlideToShow.setAttribute('style', 'display: block;')

    })
}

function back() {
    const backArrow = document.querySelector('.left')

    backArrow.addEventListener('click', () => {
        const currentSlideToHide = document.getElementById(currentSlide)
        currentSlideToHide.setAttribute('style', 'display: none;')

        if (currentSlide == 'one') {
            currentSlide = 'three'
        } else if (currentSlide == 'two') {
            currentSlide = 'one'
        } else if (currentSlide == 'three') {
            currentSlide = 'two'
        }

        const currentSlideToShow = document.getElementById(currentSlide)
        currentSlideToShow.setAttribute('style', 'display: block;')

    })
}

next()

back()