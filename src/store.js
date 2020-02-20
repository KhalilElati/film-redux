import {taskReducer} from './reducer/reducer'
import {createStore} from 'redux'

export const store=createStore(taskReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())