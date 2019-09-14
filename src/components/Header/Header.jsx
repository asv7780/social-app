import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <img src="https://www.freeiconspng.com/uploads/free-apple-icon-png-13.png"
             alt="logo"/>
        <div className={s.loginBlock}>
          {props.isAuth
              ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
              : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>
    </header>
  )
};

export default Header;
