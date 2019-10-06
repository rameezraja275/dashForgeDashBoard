export const setModel = (modelName="" , data = null ) => async (dispatch,getState ) => {
    dispatch({ type : "SET_MODEL" , payload: { data, modelName } })
}

export const setToast = (toastName="" , data = null ) => async (dispatch,getState ) => {
    dispatch({ type : "SET_TOAST" , payload: { data, toastName } })
}
