import { createStore } from 'redux'
import mainReducer from './reducers'



const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



const store = createStore(mainReducer, enhancer)

export default store