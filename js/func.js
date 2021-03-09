

export const containerGallery = document.querySelector('.js-gallery');
export const ligthboxEl = document.querySelector('div.lightbox');
export const ligthBoxBtnEl = document.querySelector('.lightbox__button');
export const lightBoxImgEl = document.querySelector('.lightbox__image');
export const backdropEl = document.querySelector('.lightbox__overlay');

export function createMarkup(cards) {
    return cards.map(({preview, original, description}) => {
        return `
<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join(''); 
}