import React from "react";

import { TextField, TextFieldSelect } from "../../inputs/TextField/TextField";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import Form from "../Form/Form";

const ContactForm = () => {
  return (
    <Form>
      <InputContainer>
        <TextField label="Email" name="email" />
      </InputContainer>

      <InputContainer>
        <TextField label="Phone" name="phone" />
      </InputContainer>

      <InputContainer>
        <TextField label="Address" name="address" />
      </InputContainer>

      <InputContainer>
        <TextFieldSelect
          label="Country"
          name="country"
          options={[
            { name: "Australia", value: "Australia" },
            { name: "America", value: "America" },
          ]}
        />
      </InputContainer>
    </Form>
  );
};

export default ContactForm;
