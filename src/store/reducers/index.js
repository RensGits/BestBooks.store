import { combineReducers } from "@reduxjs/toolkit"
import counterReducer from "./counterReducer"

const allReducers = combineReducers({
    counterReducer
})

export default allReducers
