export const setCurrentRoute = ( currentRoute ) => async (dispatch, getState ) => {
    dispatch({ type : "CURRENT_ROUTE" , payload: currentRoute  })
}