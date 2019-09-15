import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
  posts: [
    {id: 1, post: 'Hi, how are you?', likesCount: 15},
    {id: 2, post: 'Hi, i\'m well', likesCount: 20},
    {id: 3, post: 'Hi, how', likesCount: 35}
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        post: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case DELETE_POST: {
      return  {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }

    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

//thunks
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response =await profileApi.updateStatus(status);
        if(response.data.resultCode === 0 ) {
          dispatch(setStatus(status));
        }
};

export default profileReducer;
