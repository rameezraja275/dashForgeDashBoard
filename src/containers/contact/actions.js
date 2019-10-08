export const contactDetails = (data) => async (dispatch,getState ) => {
    dispatch({ type : "CONTACT_DETAILS" , payload: data  })
}
