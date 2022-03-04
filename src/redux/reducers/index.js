import { combineReducers } from 'redux';

import Common from './Common';
import Centers from './Centers';

export default combineReducers({
	commonReducer: Common,
	centersReducer: Centers
});