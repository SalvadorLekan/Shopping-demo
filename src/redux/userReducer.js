const initialState = {
 CurrentUser: null
}

const userReducer=(state = initialState, { type, payload }) => {
    switch (type) {

    case 'SIGN_IN_OUT':
        return { ...state, CurrentUser: payload }

    default:
        return state
    }
}

export default userReducer