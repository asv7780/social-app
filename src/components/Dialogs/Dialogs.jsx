import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
  let state = props.dialogsPage;
  const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} userPhoto={d.userPhoto} id={d.id}
                                                             key={d.id}/>);
  const messagesElements = state.messages.map(m => <Message text={m.message} id={m.id} key={m.id}/>);
  let newMessageText = state.newMessageText;


  if (!props.isAuth) {
    return <Redirect to={"/login"}/>;
  }

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  )
};


export default Dialogs
