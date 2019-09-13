import React from "react";
import {maxLength, required} from "../../../utils/validators/validators";
import {Field, Form, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength100 = maxLength(10);
const AddMessageForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required, maxLength100]}
               name={"newMessageBody"}
               placeholder='Enter your message'>
        </Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </Form>
  )
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
