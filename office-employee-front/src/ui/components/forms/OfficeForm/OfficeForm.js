import React from "react";
import { useForm } from "react-hook-form";

import { ButtonsContainer } from "./OfficeForm.style";
import TextField from "../../inputs/TextField/TextField";
import Button from "../../Button/Button";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import Form from "../Form/Form";

const OfficeForm = ({ officeData, setOfficeData, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onPrevious = () => {
    props.changeStepHandler(2);
  };

  const onSubmit = (data) => {
    setOfficeData(data);
    props.changeStepHandler(4);
  };

  return (
    <Form>
      <InputContainer>
        <TextField
          {...register("employeeId", {
            value: officeData.employeeId || undefined,
            required: true,
          })}
          label="Employee ID"
          variant="outlined"
          defaultValue={officeData.employeeId}
          error={errors.employeeId}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("designation", {
            value: officeData.designation || undefined,
            required: true,
          })}
          label="Designation"
          variant="outlined"
          defaultValue={officeData.designation}
          error={errors.designation}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("department", {
            value: officeData.department || undefined,
            required: true,
          })}
          label="Department"
          variant="outlined"
          defaultValue={officeData.department}
          error={errors.department}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("workingHours", {
            value: officeData.workingHours || undefined,
            required: true,
          })}
          label="Working hours"
          variant="outlined"
          defaultValue={officeData.workingHours}
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

export default OfficeForm;
