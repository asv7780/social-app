import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  const dialogs = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Mark'},
    {id: 3, name: 'Joe'},
    {id: 4, name: 'Mary'},
    {id: 5, name: 'Kate'},
    {id: 6, name: 'Lessy'}
  ];

  const messages = [
    {id: 1, message: 'how do you do'},
    {id: 2, message: 'z.dkbyu.dkytbzd.jk'},
    {id: 3, message: 'hello'},
    {id: 4, message: 'zdbyxdybny'},
    {id: 5, message: 'ma name is mary'},
    {id: 6, message: 'hi'}
  ];

  const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  const messagesElements = messages.map(m => <Message text={m.message} id={m.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
};

export default Dialogs
