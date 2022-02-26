import React, { PureComponent, useState, useEffect } from "react";
import {
	updateNewPostTextActionCreator,
	addPostActionCreator,
} from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.newPost}>
			<div className={s.textareaDiv}>
				<Field
					name="newPostText"
					component={Textarea}
					placeholder={"Post message"}
					validate={[required, maxLength10]}
				/>
			</div>
			<button className={s.sendButton}>Send post</button>
		</form>
	);
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(
	AddNewPostForm
);

const MyPosts = React.memo(props => {
  const [a, setA] = useState();
  useEffect(() => {
    setTimeout(() => {
      setA(12);
    }, 3000);
  }, []);
  console.log("Пропсы комоненты MyPosts:");
  console.log("RENDER YO");
  console.log(props);
  let PostsElements = props.posts.map(el => <Post likes={el.likes} message={el.message} />);
  let newPostElement = React.createRef();

  const onAddPost = values => {
    console.log("Произошел сабмит формы");
    props.addPost(values.newPostText);
  };

  return <div className={s.postsBlock}>
			<h3 className={s.title}>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={s.posts}>{PostsElements}</div>
		</div>;
});

export default MyPosts;
