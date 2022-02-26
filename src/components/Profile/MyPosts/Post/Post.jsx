import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  console.log("Пропсы компоненты Post");
  console.log(props);
  return (
    <div className={s.oldPosts}>
      <div className={s.oldPost}>
        <div className={s.minifiedImage}>
          <img src='https://camo.githubusercontent.com/f6311a1b57351d28fe584a4f8e8574b4e888505a802fbcc166291a14eb673051/68747470733a2f2f732d6d656469612d63616368652d616b302e70696e696d672e636f6d2f353634782f35342f66352f36382f35346635363862653064623437363530303231363030343463653039396438392e6a7067' alt="Aboba  "></img>
        </div>
        <div className={s.textOfTheOldPost}> { props.message }</div>
        <span> { props.likes } Лайков</span>
        <span>Dislike</span>
      </div>
    </div>
  ) 
}

export default Post;