import loginReducer from './reducers/loginReducer.js'
const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({
    loginReducer,
})

let store = createStore(reducers);
export default store;