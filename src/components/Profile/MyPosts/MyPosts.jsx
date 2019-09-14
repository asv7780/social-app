import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLength(10);
const minLength2 = minLength(2);

const MyPosts = React.memo( props => {
    let postsElements = props.posts.map(p => <Post id={p.id} post={p.post} likesCount={p.likesCount}
                                                   key={p.id}/>);
    // let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"newPostText"}
               component={Textarea}
               validate={[required, maxLength10, minLength2]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>

    </Form>
  )
};
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;


