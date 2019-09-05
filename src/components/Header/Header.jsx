import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.freeiconspng.com/uploads/free-apple-icon-png-13.png"
                 alt="logo"/>
        </header>
    )
};

export default Header;
