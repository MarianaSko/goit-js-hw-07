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
    galleryImg.dataset.source = galleryItem.original;
    galleryImg.alt = galleryItem.description;
    galleryImg.loading = 'lazy';
    galleryImg.classList.add('gallery__image');
    galleryImagesEl.classList.add('gallery__item');
    galleryImagesLink.classList.add('gallery__link');
    galleryImagesLink.href = `${galleryItem.original}`;

})

const onGalleryImgClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create
        (`<img src="${event.target.dataset.source}" width="800" height="600">`)


    instance.show()

    const onInstanceKeydown = ({ code }) => {

        if (code === 'Escape') {
            instance.close()
            document.removeEventListener('keydown', onInstanceKeydown);
        }

    }

    document.addEventListener('keydown', onInstanceKeydown);
}

galleryEl.addEventListener('click', onGalleryImgClick);





console.log(galleryItems);
