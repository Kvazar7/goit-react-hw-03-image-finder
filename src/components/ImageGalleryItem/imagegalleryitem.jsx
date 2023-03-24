import css from '../ImageGalleryItem/imagegalleryitem.module.css';

export const ImageGalleryItem = ({ webFormat, alt, largFormat, openModal}) => {
  return (
    <li
      onClick={() => { openModal(largFormat) }}
      className={css.imageGalleryItem}>
      <img
        src={webFormat}
        alt={alt}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};