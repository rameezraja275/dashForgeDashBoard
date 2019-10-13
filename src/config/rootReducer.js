import { combineReducers } from 'redux';
import fileCardReducer from '../containers/fileManager/reducer'
import contactReducer from '../containers/contact/reducer'
import DrawerReducer  from '../containers/rightSideBar/reducer'

const rootReducer = combineReducers({
    file: fileCardReducer,
    contact: contactReducer,
    drawers : DrawerReducer
});

export default rootReducer;

