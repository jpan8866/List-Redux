import { combineReducers } from 'redux';
import postReducer from './postReducer';

// pass in our reducers (can name them)
export default combineReducers({
    posts: postReducer
});