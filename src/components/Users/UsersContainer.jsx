import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {followAC, unfollowAC, setUsersAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};

let mapDispatchtoProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchtoProps)(Users);

export default UsersContainer;
