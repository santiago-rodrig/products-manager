import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import reduxPoweredWindow from './store.d'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        reduxPoweredWindow.__REDUX_DEVTOOLS_EXTENSION__
            ? reduxPoweredWindow.__REDUX_DEVTOOLS_EXTENSION__()
            : (f: Function) => f
    )
)

export default store
