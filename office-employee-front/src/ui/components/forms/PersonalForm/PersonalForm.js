import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  ColumnContainer,
  BirthDateContainer,
  ButtonsContainer,
} from "./PersonalForm.style";
import TextField from "../../inputs/TextField/TextField";
import SelectField from "../../inputs/SelectField/SelectField";
import Button from "../../Button/Button";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import Form from "../Form/Form";
import {
  dayValues,
  monthValues,
  yearValues,
} from "../../../../utils/bithValues";

const PersonalForm = ({ personalData, setPersonalData, ...props }) => {
  const { register, handleSubmit, control, formState } = useForm();
  const { isValid, errors } = formState;

  const onSubmit = (data) => {
    setPersonalData(data);
    props.changeStepHandler(2);
  };

  const onError = (errors) => console.log(errors);

  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  return (
    <Form>
      <InputContainer>
        <TextField
          {...register("firstName", {
            value: personalData.firstName ? personalData.firstName : undefined,
            required: true,
          })}
          label="First name"
          variant="outlined"
          defaultValue={personalData.firstName}
          error={errors.firstName}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("lastName", {
            value: personalData.lastName ? personalData.lastName : undefined,
            required: true,
          })}
          label="Last name"
          variant="outlined"
          defaultValue={personalData.lastName}
          error={errors.lastName}
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
            defaultValue={personalData.birthDay}
            error={errors.birthDay}
            required
          />

          <SelectField
            name="birthMonth"
            control={control}
            label="Month"
            options={monthValues()}
            defaultValue={personalData.birthMonth}
            error={errors.birthMonth}
            required
          />

          <SelectField
            name="birthYear"
            control={control}
            label="Year"
            options={yearValues()}
            defaultValue={personalData.birthYear}
            error={errors.birthYear}
            required
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
            defaultValue={personalData.gender || "M"}
            error={errors.gender}
            required
          />
        </ColumnContainer>
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("username", {
            value: personalData.username ? personalData.username : undefined,
            required: true,
          })}
          label="Username"
          variant="outlined"
          defaultValue={personalData.username}
          error={errors.username}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("password", {
            value: personalData.password ? personalData.password : undefined,
            required: true,
          })}
          label="Password"
          variant="outlined"
          type="password"
          defaultValue={personalData.password}
          error={errors.password}
          required
        />
      </InputContainer>

      <ButtonsContainer>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(onSubmit, onError)()}
        >
          Next
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default PersonalForm;
