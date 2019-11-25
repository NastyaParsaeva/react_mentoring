import React, { Component } from 'react';
import FilmList from './film-list-page/film-list/film-list'
import './app.css';
import Header from './core/header/header';
import Footer from './core/footer/footer';
import SearchComponent from './search/search-component/search-component';

class App extends Component {
	render() {
		return (
			<main>
				<Header></Header>
				<SearchComponent></SearchComponent>
				<FilmList></FilmList>
				<Footer></Footer>
			</main>
		)
	}
}

export default App;