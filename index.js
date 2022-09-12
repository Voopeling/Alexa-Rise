"use strict"
const body = document.querySelector('body');
const lightHeader = document.querySelector('.header');
const lightBatton = document.querySelector('.light');
const lightHero = document.querySelector('.hero');
const linkWhite = document.querySelectorAll('.nav-items');
const paragravWhite = document.querySelectorAll('p');
const priceWhite = document.querySelectorAll('.description__subtitle');
const lightContact = document.querySelector('.contact');
const lightSun = document.querySelector('.light-sun');
const lightLun = document.querySelector('.light-lun');
const lightLogoFooter = document.querySelector('.footer__logo');
const lightLogoHeader = document.querySelector('.header-logo');

lightBatton.addEventListener("click", light);

function light(event) {
   if (event.target.closest('.light')) {
      body.classList.toggle('body__active');
      lightHeader.classList.toggle('header__white');
      lightHero.classList.toggle('hero__white');
      lightContact.classList.toggle('contact_active');
      lightSun.classList.toggle('light-sun_activ');
      lightLun.classList.toggle('light-lun_activ');
      lightLogoFooter.classList.toggle('logo_activ');
      lightLogoHeader.classList.toggle('logo_activ');
   }
   for (let i = 0; i < linkWhite.length; i++) {
      linkWhite[i].classList.toggle('nav-items_white');
   }
   for (let i = 0; i < paragravWhite.length; i++) {
      paragravWhite[i].classList.toggle('white_activ');
   }
   for (let i = 0; i < priceWhite.length; i++) {
      priceWhite[i].classList.toggle('description__subtitle_active');
   }
}
