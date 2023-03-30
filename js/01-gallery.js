import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((picture) =>
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li style="display: block" <div class="gallery__item">
    <a class="gallery__link" href="${picture.original}">
      <img
        class="gallery__image"
        src="${picture.preview}"
        data-source="${picture.original}"
        alt="${picture.description}"
      />
    </a>
  </div></li>`
  )
);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  basicLightbox
    .create(
      `
<img src="${event.target.dataset.source}">
`
    )
    .show();
});
