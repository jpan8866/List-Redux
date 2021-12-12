import { FETCH_POSTS, NEW_POST } from './types';

// each action creater will be a function that we export
// thunk middleware allows us to call the dispatch function DIRECTLY from actioncreator to make async request
// dispatch will send the action object to every reducer 
// just like you would call resolve with a promise. In this case, we want to pass in the type and payload (data)
// recall functional programing syntax, fetchPosts returns function dispatch 
const fetchPosts = () => {
    return async function(dispatch) { // use redux-thunk to deal with async, because actionCreators may only return plain JS object
        console.log('fetching');
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        dispatch({ // action object. Note this is redux-thunk, it is not actually dispatching. We need to call dispatch on this function in our component
            type: FETCH_POSTS,
            payload: data
        });
    }

}
export default fetchPosts;


/* Not using hooks (from tutorial):
export function fetchPosts() {
    return function(dispatch) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        dispatch({ // action object
            type: FETCH_POSTS,
            payload: data
        });
        
    }
}
*/