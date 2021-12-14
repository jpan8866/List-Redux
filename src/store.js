import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// Note because we named our rootReducer index.js, it can be detected automatically

const initialState = {};
const middleware = [thunk]; // note array

// A reducer's function signature is: (state, action) => newState
// here we have a dummy reducer (identity)
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store; 