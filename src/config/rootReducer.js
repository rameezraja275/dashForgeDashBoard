import { combineReducers } from 'redux';
import fileCardReducer from '../containers/fileManager/reducer'

const rootReducer = combineReducers({
    file: fileCardReducer
});

export default rootReducer;

