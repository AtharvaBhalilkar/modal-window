'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtn = document.querySelectorAll('.show-modal');

const displayModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const hideModal = function() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden');
}

const escapeModal = function(e) {
  if(e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', displayModal);
}

closeModalBtn.addEventListener('click', hideModal);

document.addEventListener('keydown', escapeModal);