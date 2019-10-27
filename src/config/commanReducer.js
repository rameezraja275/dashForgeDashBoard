import producer from 'immer';

const initialState = {
    currentRoute : null,
    darkMode : false
};

export default (state = initialState, action) => {

  return producer(state, draft => {
    switch (action.type) {
      case "CURRENT_ROUTE":
        draft.currentRoute = action.payload;
        break;
      case "DARK_MODE":
        draft.darkMode = !state.darkMode;
        break;
    } 
  });
}