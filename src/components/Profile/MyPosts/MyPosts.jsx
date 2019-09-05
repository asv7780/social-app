import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>My posts
            <div>
                <div>
                    <textarea name="post" id="" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCounts="15"/>
                <Post message="It's me" likeCounts="20"/>
                <Post message = "It's him"/>
                <Post message = "It's her"/>
                <Post message = "It's MF"/>
            </div>
        </div>
    )
};

export default MyPosts;


