import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const galleryCardsMarkup = createPictureCardsMarkUp(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);
galleryContainer.addEventListener(`click`,onGalleryContainerClick);

console.log(galleryItems);
// Step 1
function createPictureCardsMarkUp(images) {
    return images.map(({preview,original,description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
}
// console.log(createPictureCardsMarkUp(galleryItems));
// step 2 modal
function onGalleryContainerClick(e) {

  e.preventDefault();
  if ((e.target.nodeName !== "IMG")) {
    return;
  }
  const currentImgUrl = e.target.dataset.source;
  console.log(currentImgUrl);
  const instance = basicLightbox.create(`
    <img src="${currentImgUrl}" width="800" height="600">
`, {
    onShow: (instance) => {
      window.addEventListener(`keydown`, onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  })
  instance.show()
  
  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
  




