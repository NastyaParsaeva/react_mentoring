import store from "../../store";

const getFilmList = () => ({
	type: 'GET_FILM_LIST',
	searchBy: 'title',
});

const getFilmListSuccess = (filmList) => ({
	type: 'GET_FILM_LIST_SUCCESS',
	payload: {
		filmList,
	}
});

const getFilmListReject = (error) => ({
	type: 'GET_FILM_LIST_REJECT',
	payload: {
		error,
	}
});

export const asyncGetFilmList = searchBy => {
	store.dispatch((getFilmList()));
	return function(dispatch, getState) {
		return fetch('https://reactjs-cdp.herokuapp.com/movies')
			.then(filmListJson => filmListJson.json())
			.then(filmList => {
				dispatch(getFilmListSuccess(filmList));
			})
			.catch(error => dispatch(getFilmListReject(error)));
	}
}