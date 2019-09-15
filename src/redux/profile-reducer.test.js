import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

it('length of post should be incremented', () => {
    // 1. start data
    let action = addPostActionCreator('Alex testing post');
    let state = {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 15},
            {id: 2, post: 'Hi, i\'m well', likesCount: 20},
            {id: 3, post: 'Hi, how', likesCount: 35}
        ],
    };
    // 2. action
    let newState = profileReducer(state, action);
//3. expectation
    expect(newState.posts.length).toBe(4);
});
it('new message should be added', () => {
    // 1. start data
    let action = addPostActionCreator('Alex testing post');
    let state = {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 15},
            {id: 2, post: 'Hi, i\'m well', likesCount: 20},
            {id: 3, post: 'Hi, how', likesCount: 35}
        ],
    };
    // 2. action
    let newState = profileReducer(state, action);
//3. expectation
    expect(newState.posts[3].post).toBe('Alex testing post');
});

it('after deleting length of post messages should be decremented', () => {
    // 1. start data
    let action = deletePost(1);
    let state = {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 15},
            {id: 2, post: 'Hi, i\'m well', likesCount: 20},
            {id: 3, post: 'Hi, how', likesCount: 35}
        ],
    };
    // 2. action
    let newState = profileReducer(state, action);
//3. expectation
    expect(newState.posts.length).toBe(2);
});

