import { createStore } from 'redux'
import propertiesReducer from "./reducer"


const store = createStore(propertiesReducer)

export default store