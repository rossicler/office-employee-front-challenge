import React from "react";
import { MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";

import {
  Form,
  InputContainer,
  ColumnContainer,
  BirthDateContainer,
  ButtonsContainer,
} from "./PersonalForm.style";
import TextField from "../../inputs/TextField/TextField";
import Button from "../../Button/Button";
import {
  dayValues,
  monthValues,
  yearValues,
} from "../../../../utils/bithValues";

const PersonalForm = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // props.changeStepHandler(2);
  };

  return (
    <Form>
      <InputContainer>
        <TextField
          {...register("firstName")}
          label="First name"
          variant="outlined"
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField label="Last name" variant="outlined" required />
      </InputContainer>

      <InputContainer>
        <BirthDateContainer>
          <TextField
            label="Day"
            variant="outlined"
            onChange={() => {}}
            select
            // value={1}
          >
            {dayValues().map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Month"
            variant="outlined"
            onChange={() => {}}
            select
            // value={1}
          >
            {monthValues().map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Year"
            variant="outlined"
            onChange={() => {}}
            select
            // value={2021}
          >
            {yearValues().map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
        </BirthDateContainer>

        <ColumnContainer>
          <TextField
            variant="outlined"
            onChange={() => {}}
            defaultValue={"M"}
            select
            value={"M"}
          >
            <MenuItem value={"M"}>Male</MenuItem>
            <MenuItem value={"F"}>Female</MenuItem>
          </TextField>
        </ColumnContainer>
      </InputContainer>

      <InputContainer>
        <TextField label="Username" variant="outlined" required />
      </InputContainer>

      <InputContainer>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
        />
      </InputContainer>

      <ButtonsContainer>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(onSubmit)}
        >
          Next
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default PersonalForm;
