import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery')

galleryItems.forEach(galleryItem => {
    const galleryImagesEl = document.createElement('li');
    const galleryImagesLink = document.createElement('a');
    const galleryImg = document.createElement('img');
    galleryImagesLink.append(galleryImg);
    galleryImagesEl.append(galleryImagesLink);

    galleryEl.append(galleryImagesEl);
    galleryImg.src = galleryItem.preview;
    galleryImg.alt = galleryItem.description;
    galleryImg.loading = 'lazy';
    galleryImg.classList.add('gallery__image');
    galleryImagesEl.classList.add('gallery__item');
    galleryImagesLink.classList.add('gallery__link');
    galleryImagesLink.href = `${galleryItem.original}`;

})

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,

});

const onGalleryImgClick = (event) => {
    event.preventDefault();
}
galleryEl.addEventListener('click', onGalleryImgClick);

console.log(galleryItems);
