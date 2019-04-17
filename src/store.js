import { createStore, combineReducers } from 'redux'

import counter, { incActionCreator, decActionCreator,  } from './state/counter'
import toDo, { addActionCreator, deleteActionCreator } from './state/toDo'


const rootReducer = combineReducers({
    counter,
    toDo
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

window.inc = () => store.dispatch(incActionCreator())

window.dec = () => store.dispatch(decActionCreator())

window.add = (text) => store.dispatch(addActionCreator(text))

window.deleteTask = (taskKey) => store.dispatch(deleteActionCreator(taskKey))

