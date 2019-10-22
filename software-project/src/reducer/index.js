import changeBGColorReducer from './changeColorReducer';
import changeTXColorReducer from './changeTXColorReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    BGcolor : changeBGColorReducer,
    TXcolor : changeTXColorReducer
});

export default allReducer