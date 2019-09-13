import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
}


//use HOC component - withAuthRedirect

let mapStateToProps = (state) => (
  {
  profile: state.profilePage.profile,
  status: state.profilePage.status
});


export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
