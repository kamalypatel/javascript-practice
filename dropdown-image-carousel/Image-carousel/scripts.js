let currentSlide = 'one'
let hasHitTwo = false
let slideTimeout


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

        clearTimeout(slideTimeout)
        slideTimeout = setTimeout(rotateSlides, 5000)
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

        clearTimeout(slideTimeout)
        slideTimeout = setTimeout(rotateSlides, 5000)
    })
}

function slidesOptions() {
    const sliderOptions = document.querySelector('.sliderOptions')
    
    const firstCircle = document.createElement('div')
    firstCircle.classList.add('circles')
    firstCircle.addEventListener('click', () => {
        const currentSlideToHide = document.getElementById(currentSlide)
        currentSlideToHide.setAttribute('style', 'display: none;')

        currentSlide = 'one'

        const currentSlideToShow = document.getElementById(currentSlide)
        currentSlideToShow.setAttribute('style', 'display: block;')
        
        clearTimeout(slideTimeout)
        slideTimeout = setTimeout(rotateSlides, 5000)
    })

    const secondCircle = document.createElement('div')
    secondCircle.classList.add('circles')
    secondCircle.addEventListener('click', () => {
        const currentSlideToHide = document.getElementById(currentSlide)
        currentSlideToHide.setAttribute('style', 'display: none;')

        currentSlide = 'two'

        const currentSlideToShow = document.getElementById(currentSlide)
        currentSlideToShow.setAttribute('style', 'display: block;')
        
        clearTimeout(slideTimeout)
        slideTimeout = setTimeout(rotateSlides, 5000)
    })

    const thirdCircle = document.createElement('div')
    thirdCircle.classList.add('circles')
    thirdCircle.addEventListener('click', () => {
        const currentSlideToHide = document.getElementById(currentSlide)
        currentSlideToHide.setAttribute('style', 'display: none;')

        currentSlide = 'three'

        const currentSlideToShow = document.getElementById(currentSlide)
        currentSlideToShow.setAttribute('style', 'display: block;')
        
        clearTimeout(slideTimeout)
        slideTimeout = setTimeout(rotateSlides, 5000)
    })

    sliderOptions.appendChild(firstCircle)
    sliderOptions.appendChild(secondCircle)
    sliderOptions.appendChild(thirdCircle)
}

function rotateSlides() {
    if (hasHitTwo == true) {
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
    }
    
    hasHitTwo = true
    clearTimeout(slideTimeout)
    slideTimeout = setTimeout(rotateSlides, 5000)
}

next()

back()

slidesOptions()

rotateSlides()