import { createStore, applyMiddleware } from 'redux';


// the info taken from
// https://codeburst.io/understanding-redux-thunk-6dbae0241817

const rootReducer = function(state = initialState, action) {
	switch (action.type) {
		case 'GET_FILM_LIST': 
			return {
				...state,
				films: [...action.payload]
			};
		default:
			return state;				
	}
};



const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;