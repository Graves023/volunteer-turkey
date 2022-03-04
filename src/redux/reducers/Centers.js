import { GET_CENTERS } from '../../constants/ActionTypes';


const INIT_STATE = {
	centers: []
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case GET_CENTERS: {
			return { ...state, centers: [...action.payload] };
		}
		default:
			return state;
	}
};
