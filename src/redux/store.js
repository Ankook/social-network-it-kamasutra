import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			postsData: [
				{id: 1, likes: "228", message: "Abobus"},
				{id: 2, likes: "336", message: "Amogus"},
				{id: 3, likes: "282", message: "Extremumism"},
				{id: 4, likes: "205", message: "Counter-Terrorists Win"},
				{id: 5, likes: "100", message: "Durka"},
			],
			newPostText: "it-kamasutra",
		},
		dialogsPage: {
			dialogsData: [
				{id: 1, name: "Sasha"},
				{id: 2, name: "Vanya"},
				{id: 3, name: "Alice"},
				{id: 4, name: "Tatayna"},
				{id: 5, name: "Kirill"},
			],
			messagesData: [
				{id: 1, message: "Hello"},
				{id: 2, message: "I am fine. Thank you"},
				{id: 3, message: "How are you?"},
				{id: 4, message: "I do not know this theme"},
				{id: 5, message: "You are relly funny!"},
      ],
      newDialogText: ""
		},
		sidebarPage: {
			friendsData: [
				{id: 24, name: "Vasya"},
				{id: 43, name: "Kolya"},
				{id: 32, name: "Gone Fludd"},
				{id: 46, name: "Basta"},
				{id: 52, name: "Busta Rhymes"},
			],
		},
	},
	_callSubscriber(state) {
		this._subscriber(state); // === rerenderEntireTree
		console.log("State changed");
	},

	_rerenderEntireTree() {
		console.log("State was changed");
	},
	getState() {
		return this._state;
	},
	_subscriber() {
		console.log("no subscribers (observers)");
	},
	subscribe(observer) {
		this._subscriber = observer;
	},
  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state); //Вызываем subscriber
	} 
};





export default store;

window.store = store;
