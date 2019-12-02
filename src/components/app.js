import React, { Component } from 'react';
import FilmList from './film-list-page/film-list/film-list'
import './app.css';
import Header from './core/header/header';
import Footer from './core/footer/footer';
import SearchComponent from './search/search-component/search-component';
import ErrorBoundary from '../components/core/error-boundary/error-boundary';

class App extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
		
		console.log(dispatch);
	}
	
	render() {
		return (
			<ErrorBoundary>
				<main>
					<Header></Header>
					<SearchComponent></SearchComponent>
					<FilmList></FilmList>
					<Footer></Footer>
				</main>
			</ErrorBoundary>
		)
	}
}

export default App;