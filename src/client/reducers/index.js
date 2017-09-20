import { combineReducers } from 'redux';

import componentProps from './componentProps';

const rootReducer = combineReducers({
    colors: (state = null, action) => state,
    variablesCss: (state = null, action) => state,
    componentProps
});

export default rootReducer;
