import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} userPhoto={d.userPhoto} id={d.id}
                                                                   key={d.id}/>);
  const messagesElements = state.messages.map(m => <Message text={m.message} id={m.id} key={m.id}/>);
  let newMessageText = state.newMessageText;

  let onNewMessageChange = (event) => {
    let msgText = event.target.value;
    props.store.dispatch(updateNewMessageTextCreator(msgText));
  };

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <div>
          <textarea
            value={newMessageText}
            placeholder='Enter your message'
            onChange={onNewMessageChange}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs
