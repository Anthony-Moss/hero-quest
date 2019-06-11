const initialState = {
    gameWorldDisplay: 'none'
}

// mapStateToProps(state)

const worldReducer = (state=initialState, action) => {
    switch(action.type) {
        // this handles our move player action
        case 'START_NEW_GAME':
            return {
                gameWorldDisplay: action.payload.gameWorldDisplay
            }
            default:
                return state
    }
}

export default worldReducer;