const signUp = document.getElementsByClassName('header-button')[0];
const Modal = document.getElementsByClassName('modal')[0];
const closeBtn = document.getElementsByClassName('second-icon')[0];
const openNavBtn = document.getElementsByClassName('first-icon')[0];

signUp.addEventListener('click', () => {
    Modal.classList.add('show-modal');
})

closeBtn.addEventListener('click', () => {
    Modal.classList.remove('show-modal');
})

openNavBtn.addEventListener('click',() => {
    document.body.classList.toggle('show-nav');
})

window.addEventListener('click', e => e.target == Modal ? Modal.classList.remove('show-modal'): null)