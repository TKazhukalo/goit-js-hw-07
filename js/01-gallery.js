import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
console.log(createImagesCards(galleryItems));
const imagesContainer = document.querySelector('.gallery');
//const imagesEl = document.querySelector('.gallery__item');
const cardsMarkup = createImagesCards(galleryItems);

//imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imagesContainer.innerHTML=cardsMarkup;
imagesContainer.addEventListener('click', onContainerClick);
function createImagesCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
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




function onContainerClick(evt) {
    evt.preventDefault();
    const isImageGallery = evt.target.classList.contains('gallery__image');
    if (!isImageGallery) {
        return;
    }
    const activeEvtUrl = evt.target.dataset.source;
    console.log(activeEvtUrl);

    //import * as basicLightbox from 'basiclightbox'
 
    const instance = basicLightbox.create(`<div class="modal">
       <img src="${activeEvtUrl}" width="1280" height="auto"/>
    </div>`,
        {
              onShow: (instance) => {
                instance.element().querySelector('img').onclick = instance.close;
            },
        }    
    );
    instance.show();
    window.addEventListener('keydown',onEscKey);
    function onEscKey(evt) {
        if (evt.key === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscKey);
        }
    }
 }





