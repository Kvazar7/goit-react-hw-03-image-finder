import { ImageGalleryItem } from '../ImageGalleryItem/imagegalleryitem';
import css from '../ImageGallery/imagegallery.module.css';
                          //! додати відкриття модалки
export const ImageGallery = ({ images }) => {
  return (
      
    <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags}) => (
          <ImageGalleryItem
            key={id}
            webFormat={webformatURL}
            largFormat={largeImageURL}
            alt={tags}
          />
        ))}
      </ul>
    );
}; 

