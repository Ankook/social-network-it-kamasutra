import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "../Users/User";

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
  console.log("Текущая страница на странице пользователей");
  console.log(currentPage);
	return (
		<div className={s.userBarList}>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
      {users.map((user) => (
        <User key={user.id} user={user} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
			))}
		</div>
	);
};

export default Users;
