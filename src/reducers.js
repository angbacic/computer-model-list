

import {ADD_MODEL} from './actions.js'
import store from './store.js';

const initialState= [];

const mainReducer = (state=initialState, action={})=>{
    switch (action.type){
        case 'ADD_MODEL':
        return  [
            ...state,
            action.payload
        ]
        default:
        return state 
    }
}

export default mainReducer