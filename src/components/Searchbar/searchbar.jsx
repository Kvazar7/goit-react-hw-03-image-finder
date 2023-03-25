import PropTypes from 'prop-types';
import { Component } from 'react'
import css from '../Searchbar/searchbar.module.css'

class Search extends Component {
  state = {
    value: ''
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value })
	}

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSerch(this.state.value)
  }

  render(){
    return (
      <header className={css.Searchbar}>
        <form
            className={css.SearchForm}
            onSubmit={this.handleSubmit}>
          
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    )
  }
}

export default Search

Search.propTypes = {
  handleSerch: PropTypes.func,
}