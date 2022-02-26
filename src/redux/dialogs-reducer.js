const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Sasha"},
    { id: 2, name: "Vanya"},
    { id: 3, name: "Alice"},
    { id: 4, name: "Tatayna"},
    { id: 5, name: "Kirill"},
  ],
  messagesData: [
    { id: 1, message: "Hello"},
    { id: 2, message: "I am fine. Thank you"},
    { id: 3, message: "How are you?"},
    { id: 4, message: "I do not know this theme"},
    { id: 5, message: "You are relly funny!"},
  ],
};

const dialogsReducer = (state = initialState, action) => {

  

  switch (action.type) {
    case SEND_MESSAGE: {
      
      let newDialog = action.newMessageBody;

      return {
        ...state,
        messagesData: [ ...state.messagesData , {id: 6, message: newDialog}]
      };
    }
    default:
      return state;
      
  }

}

export const addDialogActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;