import React from "react";

import { TextField } from "../../inputs/TextField/TextField";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import Form from "../Form/Form";

const OfficeForm = () => {
  return (
    <Form>
      <InputContainer>
        <TextField label="Employee ID" name="employeeId" />
      </InputContainer>

      <InputContainer>
        <TextField label="Designation" name="designation" />
      </InputContainer>

      <InputContainer>
        <TextField label="Department" name="department" />
      </InputContainer>

      <InputContainer>
        <TextField label="Working hours" name="workingHours" />
      </InputContainer>
    </Form>
  );
};

export default OfficeForm;
