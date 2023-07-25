// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItem = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);
function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(image => {
       return `
<li class="gallery__item">
        <a
            class="gallery__link"
            href="${image.original}"
        >
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
        </a>
    </li>`;
    
    }).join('');
};

galleryItem.insertAdjacentHTML('beforeend', galleryItemMarkup);


const lightbox = new SimpleLightbox('.gallery a', {
    overlay: true,
    overlayOpacity: 0.7,
    caption: true,
   captionsData: 'alt',
     captionDelay: 250,});

