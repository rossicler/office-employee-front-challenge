import React from "react";
import { useForm } from "react-hook-form";

import { ButtonsContainer } from "./ContactForm.style";
import TextField from "../../inputs/TextField/TextField";
import SelectField from "../../inputs/SelectField/SelectField";
import Button from "../../Button/Button";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import Form from "../Form/Form";

const ContactForm = ({ contactData, setContactData, ...props }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onPrevious = () => {
    props.changeStepHandler(1);
  };

  const onSubmit = (data) => {
    setContactData(data);
    props.changeStepHandler(3);
  };

  return (
    <Form>
      <InputContainer>
        <TextField
          {...register("email", {
            value: contactData.email || undefined,
            required: true,
          })}
          label="Email"
          variant="outlined"
          defaultValue={contactData.email}
          error={errors.email}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("phone", {
            value: contactData.phone || undefined,
            required: true,
          })}
          label="Phone"
          variant="outlined"
          defaultValue={contactData.phone}
          error={errors.phone}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("address", {
            value: contactData.address || undefined,
            required: true,
          })}
          label="Address"
          variant="outlined"
          defaultValue={contactData.address}
          error={errors.address}
          required
        />
      </InputContainer>

      <InputContainer>
        <SelectField
          name="country"
          control={control}
          label="Country"
          options={[
            { name: "Australia", value: "Australia" },
            { name: "America", value: "America" },
          ]}
          defaultValue={contactData.country || "Australia"}
          error={errors.country}
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

export default ContactForm;
