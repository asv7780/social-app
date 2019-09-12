import React from 'react';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (msg) => {
      dispatch(updateNewMessageTextCreator(msg));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
};


compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
//use HOC component - withAuthRedirect
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default
compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
