import css from '../ImageGalleryItem/imagegalleryitem.module.css';

export const ImageGalleryItem = ({ webFormat, largFormat, alt }) => {
  return (
    <li className={css.imageGalleryItem}>

      <img
        src={webFormat}
        alt={alt}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};