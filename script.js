'use strict'

const timerHidden = document.querySelector('.timer-hidden');
const closeBtn = document.querySelector('.close-btn');
const blackBtn = document.querySelector('.blackBtn');
const burgerLink = document.querySelector('.burger-link');
const menu = document.querySelector('.menu');


closeBtn.addEventListener('click', () => {
    timerHidden.classList.add('hidden');
})


blackBtn.addEventListener('click', () => {
    menu.classList.remove('open');
})


burgerLink.addEventListener('click', () => {
    menu.classList.toggle('open');
    console.log('hello');
})