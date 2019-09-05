import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${s.dialog}`}><NavLink to={path}>{props.name}</NavLink></div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <DialogsItem name="John" id="1" />
               <DialogsItem name="Mark" id="2" />
               <DialogsItem name="Joe" id="3" />
               <DialogsItem name="Mary" id="4" />
               <DialogsItem name="Kate" id="5" />
               <DialogsItem name="Lessy" id="6" />
           </div>
            <div className={s.messages}>
                <Message text="Hi"/>
                <Message text="jr"/>
                <Message text="you"/>
                <Message text="By"/>
                <Message text="Vr"/>
            </div>
        </div>
    );
};

export default Dialogs;


