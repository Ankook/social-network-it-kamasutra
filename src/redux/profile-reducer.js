import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
	postsData: [
		{id: 1, likes: "228", message: "Abobus"},
		{id: 2, likes: "336", message: "Amogus"},
		{id: 3, likes: "282", message: "Extremumism"},
		{id: 4, likes: "205", message: "Counter-Terrorists Win"},
		{id: 5, likes: "100", message: "Durka"},
	],
	profile: null,
	status: "",
};
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				//Создаем новый пост
				id: 5,
				message: action.newPostText,
				likesCount: 0,
			};

			return {
				...state,
				newPostText: " ",
				postsData: [...state.postsData, newPost],
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter((p) => p.id !== action.postId),
			};
		}
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => ({
	type: ADD_POST,
	newPostText,
});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getUserProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);

	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async(dispatch) => {
  let response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
};

export default profileReducer;
