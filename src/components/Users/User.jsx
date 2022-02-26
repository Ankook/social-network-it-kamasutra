import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/agent-smith.png";

let User = ({ user, followingInProgress, unfollow, follow }) => {

	return (
				<div className={s.userBar}>
					<span className={s.subscribeStatus}>
						<div className={s.imageConatiner}>
							<NavLink to={"/profile/" + user.id}>
								<img
									alt="UserPic"
									className={s.image}
									src={
										user.photos.small != null ? user.photos.small : userPhoto
									}
								/>
							</NavLink>
						</div>
						<div className={s.buttonContainer}>
							{user.followed ? (
								<button
									disabled={followingInProgress.some(
										(id) => id === user.id
									)}
									onClick={() => {
										unfollow(user.id);
									}}
									className={s.button}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={followingInProgress.some(
										(id) => id === user.id
									)}
									onClick={() => {
										follow(user.id);
									}}
									className={s.button}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span className={s.userTextInfo}>
						<div className={s.userText}>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</div>
						<span className={s.userLocationColumn}>
							<div>{"user.location.country "}</div>
							<div>{"user.location.city "}</div>
						</span>
					</span>
				</div>
	);
};

export default User;
