import { combineReducers } from 'redux';
import fileCardReducer from '../containers/fileManager/reducer'
import contactReducer from '../containers/contact/reducer'
import DrawerReducer  from '../containers/rightSideBar/reducer'
import CalendarReducer from '../containers/calendar/reducer'

const rootReducer = combineReducers({
    file: fileCardReducer,
    contact: contactReducer,
    drawers : DrawerReducer,
    calendar : CalendarReducer
});

export default rootReducer;

