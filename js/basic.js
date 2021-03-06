import cards from './gallery-items.js';
import {containerGallery, ligthboxEl, ligthBoxBtnEl, lightBoxImgEl, backdropEl} from './func.js';
import { createMarkup } from './func.js';

// const containerGallery = document.querySelector('.js-gallery');
// const ligthboxEl = document.querySelector('div.lightbox');
// const ligthBoxBtnEl = document.querySelector('.lightbox__button');
// const lightBoxImgEl = document.querySelector('.lightbox__image');
// const backdropEl = document.querySelector('.lightbox__overlay');

const createCards = createMarkup(cards);
containerGallery.insertAdjacentHTML('beforeend', createCards);

containerGallery.addEventListener('click', onImgClick);

ligthBoxBtnEl.addEventListener('click', onBtnCloseModal);
backdropEl.addEventListener('click', onBackdropCloseModal);
window.addEventListener('keydown', onEscCloseModal);


// function createMarkup(cards) {
//     return cards.map(({preview, original, description}) => {
//         return `
// <li class="gallery__item">
//   <a class="gallery__link"
//     href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
//     }).join(''); 
// };


function onImgClick(e) {
  e.preventDefault();
  if (e.target.localName === 'img') {
    ligthboxEl.classList.add('is-open');
    lightBoxImgEl.src = e.target.dataset.source;
  };
  
};


function onBtnCloseModal(e) {
  ligthboxEl.classList.remove('is-open');
  lightBoxImgEl.src = '';
};
function onEscCloseModal(e) {
  if (e.key === 'Escape') {
    onBtnCloseModal();
  };
};

function onBackdropCloseModal(e) {
  if (e.target.localName !== 'img') {
    onBtnCloseModal();
  };
};
