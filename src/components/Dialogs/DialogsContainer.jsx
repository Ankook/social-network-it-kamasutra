import { addDialogActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  console.log("Пропсы стейта, который нам нужен");
  console.log(state);
  return {
    dialogsPage: state.dialogsPage,
    //isAuth: state.authPage.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addDialog: (newMessageBody) => {
      dispatch(addDialogActionCreator(newMessageBody));
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
