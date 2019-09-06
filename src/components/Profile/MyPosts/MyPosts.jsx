import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post id={p.id} post={p.post} likesCount={p.likesCount} key={p.id}/>);

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
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;


