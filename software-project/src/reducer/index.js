import changeBGColorReducer from './changeColorReducer';
import changeTXColorReducer from './changeTXColorReducer';
import changeCodeColorReducer from './changeCodeColorReducer'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    BGcolor : changeBGColorReducer,
    TXcolor : changeTXColorReducer,
    codeBGcolor : changeCodeColorReducer
});

export default allReducer