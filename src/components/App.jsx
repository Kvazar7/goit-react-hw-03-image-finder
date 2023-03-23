import React, { Component } from 'react';
import Notiflix from 'notiflix';

import Search from './Searchbar/searchbar'
import { getDataImg } from 'services/getpicture';
import { ImageGallery } from './ImageGallery/imagegallery';
import { Loader } from './Loader/loader';

import css from './App.module.css'

export class App extends Component {
	state = {
		searchText: '',
		img: [],
		imagesArray: [],
		loadingInProgress: false,
		showModal: false,
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
		
		if (prevState.searchText !== this.state.searchText) {
			getDataImg(this.state.searchText)
				.then((response) => response.json())
				.then(data => {
					console.log(data)
					if (data.hits.length === 0) {
						Notiflix.Notify.warning('Sorry, nothing found')
				}
					
					this.setState({ imagesArray: data.hits });
					
				})
				.catch(error => {
					Notiflix.Notify.failure(`${error}`)
				})
				.finally(() => {
					this.setState({loadingInProgress: false}) 
				})
		}
}

  render() {
    
	return (
      <div className={css.App}>
			<Search handleSerch={this.handleSerch} />
			{this.state.loadingInProgress && <Loader />}
			<ImageGallery images={this.state.imagesArray} />
      </div>
  )}
};
