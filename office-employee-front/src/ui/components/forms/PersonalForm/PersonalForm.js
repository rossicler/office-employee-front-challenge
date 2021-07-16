import React from "react";
import { MenuItem } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

import {
  Form,
  InputContainer,
  ColumnContainer,
  BirthDateContainer,
  ButtonsContainer,
} from "./PersonalForm.style";
import TextField from "../../inputs/TextField/TextField";
import SelectField from "../../inputs/SelectField/SelectField";
import Button from "../../Button/Button";
import {
  dayValues,
  monthValues,
  yearValues,
} from "../../../../utils/bithValues";

const PersonalForm = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.changeStepHandler(2);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <TextField
          {...register("firstName", { required: true })}
          label="First name"
          variant="outlined"
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("lastName", { required: true })}
          label="Last name"
          variant="outlined"
          required
        />
      </InputContainer>

      <InputContainer>
        <BirthDateContainer>
          <SelectField
            name="birthDay"
            control={control}
            label="Day"
            options={dayValues()}
          />

          <SelectField
            name="birthMonth"
            control={control}
            label="Month"
            options={monthValues()}
          />

          <SelectField
            name="birthYear"
            control={control}
            label="Year"
            options={yearValues()}
          />
        </BirthDateContainer>

        <ColumnContainer>
          <SelectField
            name="gender"
            control={control}
            label="Gender"
            options={[
              { name: "Male", value: "M" },
              { name: "Female", value: "F" },
            ]}
            defaultValue="M"
          />
        </ColumnContainer>
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("username", { required: true })}
          label="Username"
          variant="outlined"
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("password", { required: true })}
          label="Password"
          variant="outlined"
          type="password"
          required
        />
      </InputContainer>

      <ButtonsContainer>
        <Button color="primary" variant="contained" type="submit">
          Next
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default PersonalForm;
