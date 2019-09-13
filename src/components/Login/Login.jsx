import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={"input"}/>
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={"input"}/>
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={"input"}/>Remember me
      </div>
      <button>login</button>
    </form>
)
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return <div>
  <h1>LOGIN</h1>
   <LoginReduxForm onSubmit={onSubmit}/>
  </div>
};

export default Login;
