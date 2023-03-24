import css from '../Button/button.module.css'

export const Button = ({ onLoadMore }) => {
    return (
        <button type="button" onClick={onLoadMore} className={css.Button}>
            Load more...
        </button>
    )
}