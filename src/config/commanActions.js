export const setCurrentRoute = ( currentRoute ) => async (dispatch, getState ) => {
    dispatch({ type : "CURRENT_ROUTE" , payload: currentRoute  })
}

export const setDarkMode = () => async (dispatch, getState ) => {
    dispatch({ type : "DARK_MODE" , payload: null  })
}