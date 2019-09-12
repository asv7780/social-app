import {usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
  posts: [
    {id: 1, post: 'Hi, how are you?', likesCount: 15},
    {id: 2, post: 'Hi, i\'m well', likesCount: 20},
    {id: 3, post: 'Hi, how', likesCount: 35}
  ],
  newPostText: 'Alex.com',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        post: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
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

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => (
  {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
);

//thunks
export const getUserProfile = (userId) => (dispatch) => {
  usersApi.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};


export default profileReducer;
