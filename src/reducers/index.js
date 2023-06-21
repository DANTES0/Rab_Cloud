import {applyMiddleware, combineReducers, createStore, compose, middleware} from "redux";
// import {configureStore, combineReducers} from "redux-toolkit"
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import thunkMiddleware from "redux-thunk";
import uploadReducer from "./uploadReducer"
import appReducer from "./appReducer"
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    // user: userReducer
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
//  export function configureStore({reducer: rootReducer, middleware:(getDefaultMiddleware)=> getDefaultMiddleware()})
// export const store = configureStore({
//     reducer: rootReducer,    
// })