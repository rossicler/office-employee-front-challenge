import React from "react";
import { useForm } from "react-hook-form";

import { ButtonsContainer } from "./OfficialForm.style";
import TextField from "../../inputs/TextField/TextField";
import Button from "../../Button/Button";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import Form from "../Form/Form";

const OfficialForm = ({ officialData, setOfficialData, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onPrevious = () => {
    props.changeStepHandler(2);
  };

  const onSubmit = (data) => {
    console.log(data);
    setOfficialData(data);
    props.changeStepHandler(4);
  };

  return (
    <Form>
      <InputContainer>
        <TextField
          {...register("employeeId", {
            value: officialData.employeeId || undefined,
            required: true,
          })}
          label="Employee ID"
          variant="outlined"
          defaultValue={officialData.employeeId}
          error={errors.employeeId}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("designation", {
            value: officialData.designation || undefined,
            required: true,
          })}
          label="Designation"
          variant="outlined"
          defaultValue={officialData.designation}
          error={errors.designation}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("department", {
            value: officialData.department || undefined,
            required: true,
          })}
          label="Department"
          variant="outlined"
          defaultValue={officialData.department}
          error={errors.department}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("workingHours", {
            value: officialData.workingHours || undefined,
            required: true,
          })}
          label="Working hours"
          variant="outlined"
          defaultValue={officialData.workingHours}
          error={errors.workingHours}
          required
        />
      </InputContainer>

      <ButtonsContainer>
        <Button color="secondary" variant="contained" onClick={onPrevious}>
          Previous
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Next
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default OfficialForm;
