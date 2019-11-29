const initialState = {
	films: [],
	isFetching: false,
	isError: false,
}

const asyncReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_FILM_LIST':
			return {
				...state,
				isFetching: true,
				films: [],
				isError: false,
			};
		case 'GET_FILM_LIST_SUCCESS': 
			return {
				...state,
				isFetching: false,
				films: action.payload,
				isError: false,
			};
		case 'GET_FILM_LIST_REJECT':
			return {
				...state,
				isFetching: false,
				films: [],
				isError: true,
			}
		default:
			return state;
	}
		
}

export default asyncReducer;