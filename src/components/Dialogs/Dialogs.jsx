import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} userPhoto={d.userPhoto} id={d.id} key={d.id}/>);
  const messagesElements = props.state.messages.map(m => <Message text={m.message} id={m.id} key={m.id}/>);

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let messageText = newMessageElement.current.value;
    alert(messageText);
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
          <button onClick={addMessage}>Add message</button>
        </div>
        <textarea name="post" id="" cols="30" rows="3" ref={newMessageElement}></textarea>
      </div>
    </div>
  )
};

export default Dialogs
