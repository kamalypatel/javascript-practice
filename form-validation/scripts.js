const form = document.querySelector('form')

const email = document.querySelector('#mail')

const emailError = document.querySelector('.email-error')

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailError.textContent = ''
        emailError.classList.remove('active')
    } else {
        showEmailError()
    }
})

form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        showEmailError()
    
        event.preventDefault()
    }

})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an email address.'
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address.'
    }

    emailError.classList.add('active')
}