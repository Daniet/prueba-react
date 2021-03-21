import React, {
    // userReducer
} from 'react'

// import GlobalReducer from './globalReducer'
import GlobalContext from './globalContext'

const GlobalState = props => {

    // const initialState = {}
    // const [state, dispach] = userReducer(GlobalReducer, initialState)

    return <GlobalContext.Provider>
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalState