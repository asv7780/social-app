import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validators/validators";
import s from './../common/FormControls/FormControls.module.css'
import {createField, Input} from "../common/FormControls/FormControls";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input, {type:"password"})}
        {createField(null, "rememberMe", [], Input, {type:"checkbox"}, "Remember me")}

        {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
          <button>login</button>
      </div>
    </form>
)
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if(props.isAuth) {
      return <Redirect to={"/profile"} />
  }
  return <div>
  <h1>Login</h1>
   <LoginReduxForm onSubmit={onSubmit}/>
  </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
