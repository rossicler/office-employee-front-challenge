import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

import {
  ColumnContainer,
  DateInputsContainer,
  DateContainer,
} from "../Form/Form.style";
import { TextField, TextFieldSelect } from "../../inputs/TextField/TextField";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import Form from "../Form/Form";
import {
  dayValues,
  monthValues,
  yearValues,
} from "../../../../utils/bithValues";

const PersonalForm = (props) => {
  return (
    <Form>
      <InputContainer>
        <ColumnContainer>
          <TextField label="First name" name="firstName" />
        </ColumnContainer>

        <ColumnContainer>
          <TextField label="Last name" name="lastName" />
        </ColumnContainer>
      </InputContainer>

      <InputContainer>
        <DateContainer>
          <Typography variant="body2" color="textPrimary" paragraph={true}>
            Birth Date *
          </Typography>
          <DateInputsContainer>
            <TextFieldSelect
              label="Day"
              name="birthDay"
              options={dayValues()}
            />

            <TextFieldSelect
              label="Month"
              name="birthMonth"
              options={monthValues()}
            />

            <TextFieldSelect
              label="Year"
              name="birthYear"
              options={yearValues()}
            />
          </DateInputsContainer>
        </DateContainer>
      </InputContainer>

      <InputContainer>
        <TextFieldSelect
          label="Gender"
          name="gender"
          options={[
            { name: "Male", value: "M" },
            { name: "Female", value: "F" },
          ]}
        />
      </InputContainer>

      <InputContainer>
        <TextField label="Username" name="username" />
      </InputContainer>

      <InputContainer>
        <TextField label="Password" name="password" type="password" />
      </InputContainer>
    </Form>
  );
};

export default PersonalForm;
