import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/formsControls/FormsControls";
//import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  console.log("Пропсы компоненты Dialogs:");
  console.log(props);

  

  let dialogsElements = props.dialogsPage.dialogsData.map(el => (<DialogItem name={el.name} key={el.id} id={el.id} />))
  let MessageElements = props.dialogsPage.messagesData.map(el => (<Message message={el.message} key={el.id} id={el.id} />))


let addNewMessage = (values) => {
  props.addDialog(values.newMessageBody);
}


return (
<div className={s.dialogs}>
  <div className={s.dialogsItems}>
    {dialogsElements}
  </div>
  <div className={s.messages}>
    {MessageElements}
  </div>
    <div className={s.newDialog}>
      <AddMessageForm onSubmit={addNewMessage}/>  
  </div>
</div>
)
}

export default Dialogs;
