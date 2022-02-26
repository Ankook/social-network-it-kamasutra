import React from "react";

import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/formsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import  style  from "../common/formsControls/FormsControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
  console.log('RERENDER ALERT');
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
      { error && <div className={style.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}


const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
}) (LoginForm)

const Login = (props) => {
  console.log('Пропсы компоненты Login');
  console.log(props);
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
    console.log("email");
    console.log(formData.email);
    console.log("password");
    console.log(formData.password);
    console.log("rememberMe");
    console.log(formData.rememberMe);
  }

  console.log(props.isAuth);
  if (props.isAuth) {

    return <Redirect to={"/profile"}/>
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth
})

export default connect( mapStateToProps , {login} )(Login);