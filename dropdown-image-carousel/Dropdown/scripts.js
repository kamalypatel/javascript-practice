function dropDownHover() {
    const hover = document.querySelector('.dropdown-hover')
    hover.addEventListener('mouseover', () => {
        const dropDown = document.querySelector('.dropdown')
        dropDown.setAttribute('style', 'display: block;')
    })
    hover.addEventListener('mouseout', () => {
        const dropDown = document.querySelector('.dropdown')
        dropDown.setAttribute('style', 'display: none;')
    })
}

dropDownHover()