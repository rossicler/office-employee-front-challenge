import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

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

const PersonalForm = ({ personalData, setPersonalData, ...props }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    setPersonalData(data);
    props.changeStepHandler(2);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <TextField
          {...register("firstName", {
            value: personalData.firstName || undefined,
            required: true,
          })}
          label="First name"
          variant="outlined"
          defaultValue={personalData.firstName}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("lastName", {
            value: personalData.lastName || undefined,
            required: true,
          })}
          label="Last name"
          variant="outlined"
          defaultValue={personalData.lastName}
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
          />

          <SelectField
            name="birthMonth"
            control={control}
            label="Month"
            options={monthValues()}
            defaultValue={personalData.birthMonth}
          />

          <SelectField
            name="birthYear"
            control={control}
            label="Year"
            options={yearValues()}
            defaultValue={personalData.birthYear}
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
          />
        </ColumnContainer>
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("username", {
            value: personalData.username || undefined,
            required: true,
          })}
          label="Username"
          variant="outlined"
          defaultValue={personalData.username}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("password", {
            value: personalData.password || undefined,
            required: true,
          })}
          label="Password"
          variant="outlined"
          type="password"
          defaultValue={personalData.password}
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
