import React, { Component } from 'react';

import Search from './Searchbar/searchbar'
import { getDataImg } from 'services/getpicture';

import css from './App.module.css'


export class App extends Component {
  state = {
		isShowModal: false,
		searchText: '',
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

	componentDidUpdate(prevProps, prevState) {
	  console.log('this.props :>> ', this.props)
    if (prevProps.searchText !== this.props.searchText) { 
      // this.setState({ status: STATUS.PENDING })
      getDataImg(this.props.searchText)
			// 	.then((response) => response.json())
			// 	.then((data) => {
			// 		if (data.status === 'ok')
			// 			this.setState({
			// 				news: data.articles,
			// 				status: STATUS.RESOLVED,
			// 			})
			// 		else return Promise.reject(data.message)
			// 	})
			// 	.catch((error) => {
			// 		this.setState({ error, status: STATUS.REJECTED })
			// 	})
    }
  }

  render() {
    
    return (
      <div className={css.App}>
        <Search handleSerch={this.handleSerch} />
      </div>
  )}
};
