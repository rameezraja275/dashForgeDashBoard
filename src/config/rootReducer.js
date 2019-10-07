import { combineReducers } from 'redux';
import fileCardReducer from '../containers/fileManager/reducer'
import contactReducer from '../containers/contact/reducer'

const rootReducer = combineReducers({
    file: fileCardReducer,
    contact: contactReducer
});

export default rootReducer;

