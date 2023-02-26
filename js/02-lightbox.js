import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const galleryCardsMarkup = createPictureCardsMarkUp(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);


console.log(galleryItems);
// step 1
function createPictureCardsMarkUp(images) {
    return images.map(({preview,original,description}) => {
        return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");
};

  // function onGalleryContainerClick(e) {

  //    e.preventDefault();
  //    if ((e.target.nodeName !== "IMG")) {
  //        return;
  //    }
  //     const lightbox = new SimpleLightbox('.gallery a', {
  //          captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
  //     })
  // };
  // galleryContainer.addEventListener(`click`, onGalleryContainerClick);
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });