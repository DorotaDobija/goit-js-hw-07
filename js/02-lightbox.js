import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((picture) =>
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li style="display: block" <a class="gallery__item" href="${picture.original}">
<img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
</a></li>`
  )
);
