

const mobileNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector("img[alt='Menu']")
const hamburgerClose = document.querySelector("img[alt='Close']")
const overlay = document.querySelector('.overlay')
const thankYou = document.querySelector('.thank-you')

const backThisProject = document.querySelector('.back-btn')
const modal = document.querySelector('.modal')
const closeModal = modal.querySelector("img[alt='close modal']")
const radioBtn = modal.querySelectorAll('input[type="radio"]')
const noReward = modal.querySelector('.no-reward')
const bamboo = modal.querySelector('.bamboo-stand')
const blackEdition = modal.querySelector('.black-edition-stand')
const noRewardInput = noReward.querySelector('.pledge-input')
const blackInput = blackEdition.querySelector('.pledge-input')
const bambooInput = bamboo.querySelector('.pledge-input')
const card = modal.querySelectorAll('.card')
const continueBtn = modal.querySelectorAll('.continue')

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
    card[0].addEventListener('click', ()=>{
        radioBtn[0].checked = true;
        noRewardInput.classList.add('show')
        card[0].classList.add('card-checked')
        card[1].classList.remove('card-checked')
        card[2].classList.remove('card-checked')
        blackInput.classList.remove('show')
        bambooInput.classList.remove('show')
    }, false)
    card[1].addEventListener('click', ()=>{
        radioBtn[1].checked = true;
        bambooInput.classList.add('show')
        card[1].classList.add('card-checked')
        card[0].classList.remove('card-checked')
        card[2].classList.remove('card-checked')
        blackInput.classList.remove('show')
        noRewardInput.classList.remove('show')
    }, false)
    card[2].addEventListener('click', ()=>{
        radioBtn[2].checked = true;
        blackInput.classList.add('show')
        card[2].classList.add('card-checked')
        card[1].classList.remove('card-checked')
        card[0].classList.remove('card-checked')
        bambooInput.classList.remove('show')
        noRewardInput.classList.remove('show')
    }, false)
    
}

for (let i = 0; i < continueBtn.length; i++) {
    continueBtn[i].addEventListener('click', ()=>{
        modal.classList.remove('show');
        thankYou.classList.add('show');
        thankYou.style.animation = 'spin 3s';
    }, false)
    
}

thankYou.querySelector('.got-it').addEventListener('click',()=>{
    thankYou.classList.remove('show')
    overlay.classList.remove('show');
})