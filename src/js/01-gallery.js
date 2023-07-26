// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItem = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);
galleryItem.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(image => {
       return `

        <a
            class="gallery__item"
            href="${image.original}"
        >
            <img
                class="gallery__image"
                src="${image.preview}"
                
                alt="${image.description}"
            />
        </a>
    `
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {});


