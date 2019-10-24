"use strict";

document.addEventListener("DOMContentLoaded", function () {

    //показать модальное меню
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        const menuModal = document.querySelector('.menu-modal');
        const menu = document.querySelector('.main-menu');
        const socials = document.querySelector('.socials');
        document.body.style.overflow = 'hidden';
        menuModal.style.display = 'flex';
        menu.style.display = 'block';
        socials.style.display = 'block';
    })

    //скрыть модальное меню    
    function closeMenuModal() {
        const menuModal = document.querySelector('.menu-modal');
        menuModal.style.display = '';
        document.body.style.overflow = '';
    }

    //скрыть модальное меню при клике на крестик
    const cross = document.querySelector('.menu-modal__cross');
    cross.addEventListener('click', closeMenuModal)

})