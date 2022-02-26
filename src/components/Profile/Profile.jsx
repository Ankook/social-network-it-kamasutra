import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
	console.log("Пропсы компоненты Profile: ");
  console.log(props);
	return (
		<div className={s.content}>
      {/*<div
				className="poster-wrapper"
				style={{backgroundImage: "url(/images/greenplanes2.png)"}}
			></div>
      */}
			<ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile} />
      {/*<MyPostsContainer store={props.store} />*/}
      <MyPostsContainer />
		</div>
	);
};

export default Profile;
