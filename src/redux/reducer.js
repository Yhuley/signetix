import { FILTER_SOLD , FILTER_ACTIVE, FILTER_DEFAULT } from "./actions"
import * as data from "./data.json"

const initialState = Array.from(JSON.parse(JSON.stringify(data)))

const propertiesReducer = (state = initialState, action = FILTER_DEFAULT) => {
    switch (action.type) {
        case FILTER_DEFAULT:
            return initialState
        case FILTER_SOLD :
            return state.filter(item => item.status === "Sold")
        case FILTER_ACTIVE :
            return state.filter(item => item.status === "Active")
        default: 
            return initialState
    }
}

export default propertiesReducer