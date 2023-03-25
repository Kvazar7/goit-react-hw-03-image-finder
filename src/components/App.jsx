import React, { Component } from 'react';
import Notiflix from 'notiflix';

import Search from './Searchbar/searchbar'
import { Loader } from './Loader/loader';
import { getDataImg } from 'services/getpicture';
import { ImageGallery } from './ImageGallery/imagegallery';
import { Button } from './Button/button';
import { Modal } from './Modal/modal';

import css from './App.module.css'

export class App extends Component {
	state = {
		searchText: '',
		page: 1,
		imagesArray: [],
		loadingInProgress: false,
		isShowModal: false,
	}

	showModal = ( largFormat, alt ) => {
		this.setState({ imageToShow: largFormat, imageToShowAlt: alt, isShowModal: true })
		console.log('Open modal')
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
		console.log('Close modal')
	}

	handleSerch = (searchText) => {
		this.setState({ searchText })
		console.log('Looking for an image')
	}

	onLoadMore = () => {
		this.setState(prevState => ({ page: prevState.page + 1 }))
		console.log('Load more')
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.page !== this.state.page || prevState.searchText !== this.state.searchText) {
			this.setState({ loadingInProgress: true });
			getDataImg(this.state.searchText, this.state.page)
				.then((response) => response.json())
				.then(data => {
					console.log(data)
					if (data.hits.length === 0) {
						Notiflix.Notify.warning('Sorry, nothing found')
					}
					// this.setState({ imagesArray: data.hits });

					this.setState({ imagesArray: [...prevState.imagesArray, ...data.hits] });
				})
				.catch(error => {
					Notiflix.Notify.failure(`${error}`)
				})
				.finally(() => {
					this.setState({ loadingInProgress: false })
				})
		}
	}
	

  render() {
    
	return (
      <div className={css.App}>
			<Search handleSerch={this.handleSerch} />
			{this.state.loadingInProgress && <Loader />}
			{this.state.imagesArray.length > 0 && <ImageGallery images={this.state.imagesArray} openModal={this.showModal}/>}
			{this.state.imagesArray.length > 0 && <Button onLoadMore={this.onLoadMore} />}
			{this.state.isShowModal && <Modal closeModal={this.closeModal} imageToShow={this.state.imageToShow} imageToShowAlt={this.state.imageToShowAlt} />}
      </div>
  	)}
};
