// evaluate any actions that are committed 
// such as fetching posts and creating new posts

import { FETCH_POSTS, NEW_POST } from '../actions/types';

// items represent the posts that come in from action, where we put the fetch request
// item represents the single post that we add when we get response back
// const initialState = {
//     items: [],
//     item: {}
// };
const initialState = []

/// evaluates what type we are dealing with
// action has to have a type, which we evaluate
// recall the action is delivered by dispatch function
export default function(state = initialState, action) {
    switch (action.type) {
        // if its a fetch post, then we want to add to current state the new posts (payload)
        case FETCH_POSTS:
            console.log('FETCH_POST reduced');
            // return {
            //     ...state, items: action.payload
            // };
            return action.payload; // Note that the payload of this action is already an array (of posts that were fetched)
        case NEW_POST: // Since we're using json placeholder, our new post isn't added to database, so we can't just refetch.
            // return a new array with the new post at the top instead
            console.log('NEW_POST reduced');
            return [action.payload, ...state];
        default:  // if its not a fetch_post, we don't care about this action and just return current state
            return state;
    }
};