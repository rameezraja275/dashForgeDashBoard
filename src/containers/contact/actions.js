export const contactDetails = (data) => async (dispatch,getState ) => {
    dispatch({ type : "CONTACT_DETAILS" , payload: data  })
}

export const setModel = ( modelType = "create" ) => async (dispatch ) => {
    dispatch({ type : "SET_MODEL_CONTACT_FROM" , payload: modelType  })
}

export const deleteContact = () => async (dispatch ) => {
    // get id of contact from state and call delete api
    // dispatch({ type : "SET_MODEL_CONTACT_FROM" , payload: modelType  })
}