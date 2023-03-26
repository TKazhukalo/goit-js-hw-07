import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
//console.log(createImagesCards(galleryItems));
const imagesContainer = document.querySelector('.gallery');
//const imagesEl = document.querySelector('.gallery__item');
const cardsMarkup = createImagesCards(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imagesContainer.addEventListener('click', onContainerClick);
function createImagesCards(galleryItems) {
 return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    }).join('');
    
};
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: 'bottom',
   captionsData: 'alt',
    captionDelay: 250,
});
function onContainerClick() {
    console.log('click');
}