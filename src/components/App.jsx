import React, { Component } from 'react';
import Notiflix from 'notiflix';

import Search from './Searchbar/searchbar'
import { getDataImg } from 'services/getpicture';
import { ImageGallery } from './ImageGallery/imagegallery';

import css from './App.module.css'

export class App extends Component {
	state = {
		isShowModal: false,
		searchText: '',
		page: 1,
		img: [],
		imagesArray: [],
		
	}

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	handleSerch = (searchText) => {
		this.setState({ searchText })
	}

	// onLoadMore = () => {
	// 	this.setState(prevstate => ({
	// 		page: prevState.page + 1
	// 	}))
	// }

	componentDidUpdate(prevProps, prevState) {
		// console.log('this.props :>> ', this.props)
		if (prevState.searchText !== this.state.searchText) {
			getDataImg(this.state.searchText)
				.then((response) => response.json())
				.then(data => {
					console.log(data)
					if (data.hits.length === 0) {
						Notiflix.Notify.warning('Sorry, nothing found')
				}
					// const hits = data.hits;
					this.setState({ imagesArray: data.hits });
					// console.log('imagesArray: >>', this.state.imagesArray)
				})
				.catch(error => {
					Notiflix.Notify.failure(`${error}`)
			})
		}
}

  render() {
    
	return (
      <div className={css.App}>
			<Search handleSerch={this.handleSerch} />
			<ImageGallery images={this.state.imagesArray} />
      </div>
  )}
};
