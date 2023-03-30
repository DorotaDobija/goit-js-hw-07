import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((picture) =>
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li> <a class="gallery__item gallery__link" href="${picture.original}">
<img class="gallery__image" src="${picture.preview}" title="${picture.description}" />
</a></li>`
  )
);

var lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
