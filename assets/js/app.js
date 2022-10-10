

const mobileNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector("img[alt='Menu']")
const hamburgerClose = document.querySelector("img[alt='Close']")
const overlay = document.querySelector('.overlay')

const backThisProject = document.querySelector('.back-btn')
const modal = document.querySelector('.modal')
const closeModal = modal.querySelector("img[alt='close modal']")
const radioBtn = modal.querySelectorAll('input[type="radio"]')
const bamboo = document.querySelector('.bamboo-stand')
const blackEdition = document.querySelector('.black-edition-stand')
const blackInput = blackEdition.querySelector('.pledge-input')
const bambooInput = bamboo.querySelector('.pledge-input')
const card = modal.querySelectorAll('.card')

hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'none';
    hamburgerClose.style.display = 'block';
    mobileNav.classList.add('opened');
})

hamburgerClose.addEventListener('click', ()=>{
    hamburgerClose.style.display = 'none';
    hamburger.style.display = 'block';
    mobileNav.classList.remove('opened');
})

backThisProject.addEventListener('click', ()=>{
    modal.classList.add('show');
    overlay.classList.add('show');
}, false)
closeModal.addEventListener('click', ()=>{
    modal.classList.remove('show');
    overlay.classList.remove('show');
}, false)

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener('click', ()=>{
        radioBtn[i].checked;
    }, false)
    if (radioBtn[i].checked) {
        card[i].classList.add('card-checked')
    } else{
        card[i].classList.remove('card-checked')
    }
    
}