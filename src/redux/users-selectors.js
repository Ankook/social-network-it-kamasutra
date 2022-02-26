import { createSelector } from "reselect";

const getUsersSelector = (state) => {  //Это users selector getUsers, такое название остается
  return state.usersPage.users;
}

export const getUsers = createSelector( getUsersSelector, (users) => {
  return users.filter(u => true);
})

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getСurrentPage = (state) => {
  return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
}

