import s from "./Post.module.css";
import React from "react";



const Post = (props) => {
    console.log(props);
    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/User_icon-cp.png" alt="logo-user"/>{props.post}
        <div><span>likes: {props.likesCount}</span></div>
        </div>
    )
};

export default Post;
