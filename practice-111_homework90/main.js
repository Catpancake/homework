'use strict'

const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body
let isMoving = false

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
    btn.classList.add('btn-open--green')
    if (!isMoving) {
        isMoving = true
        moveDVD()
    }
}

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
    btn.classList.remove('btn-open--green')
    isMoving = false;
}


btn.addEventListener('click', openModal)
modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target && (target.classList.contains('modal') || target.classList.contains('modal__close-btn'))) {
        closeModal();
    }
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})


// ============================================


const dvd = document.getElementById('dvd')
const container = document.querySelector('.modal__window')
let posX = 0
let posY = 0
let speedX = 1
let speedY = 1
function moveDVD() {
    posX += speedX;
    posY += speedY;
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    if (posX + dvd.clientWidth > containerWidth || posX < 0) {
        speedX = -speedX
    }
    if (posY + dvd.clientHeight > containerHeight || posY < 0) {
        speedY = -speedY
    }
    dvd.style.left = posX + 'px'
    dvd.style.top = posY + 'px'
    if (isMoving) {
        requestAnimationFrame(moveDVD)
    }
}