import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  ColumnContainer,
  DateContainer,
  ButtonsContainer,
} from "./PaymentForm.style";
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

const PaymentForm = ({ paymentData, setPaymentData, ...props }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onPrevious = () => {
    props.changeStepHandler(3);
  };

  const onSubmit = (data) => {
    setPaymentData(data);
    props.submitHandler();
    alert("Submited");
  };

  return (
    <Form>
      <InputContainer>
        <TextField
          {...register("bankName", {
            value: paymentData.bankName || undefined,
            required: true,
          })}
          label="Bank Name"
          variant="outlined"
          defaultValue={paymentData.bankName}
          error={errors.bankName}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("holderName", {
            value: paymentData.holderName || undefined,
            required: true,
          })}
          label="Holder Name"
          variant="outlined"
          defaultValue={paymentData.holderName}
          error={errors.holderName}
          required
        />
      </InputContainer>

      <InputContainer>
        <DateContainer>
          <SelectField
            name="expiryDay"
            control={control}
            label="Day"
            options={dayValues()}
            defaultValue={paymentData.expiryDay}
            error={errors.expiryDay}
            required
          />

          <SelectField
            name="expiryMonth"
            control={control}
            label="Month"
            options={monthValues()}
            defaultValue={paymentData.expiryMonth}
            error={errors.expiryMonth}
            required
          />

          <SelectField
            name="expiryYear"
            control={control}
            label="Year"
            options={yearValues(2020, 2040)}
            defaultValue={paymentData.expiryYear}
            error={errors.expiryYear}
            required
          />
        </DateContainer>

        <ColumnContainer>
          <SelectField
            name="paymentType"
            control={control}
            label="Payment Type"
            options={[
              { name: "Master Card", value: "mastercard" },
              { name: "Visa Card", value: "vistacard" },
            ]}
            defaultValue={paymentData.paymentType || "mastercard"}
            error={errors.paymentType}
            required
          />
        </ColumnContainer>
      </InputContainer>

      <InputContainer>
        <ColumnContainer>
          <TextField
            {...register("cardNumber", {
              value: paymentData.cardNumber || undefined,
              required: true,
            })}
            label="Card Number"
            variant="outlined"
            defaultValue={paymentData.cardNumber}
            error={errors.cardNumber}
            required
          />
        </ColumnContainer>
        <ColumnContainer>
          <TextField
            {...register("cvc", {
              value: paymentData.cvc || undefined,
              required: true,
            })}
            label="CVC"
            variant="outlined"
            defaultValue={paymentData.cvc}
            error={errors.cvc}
            required
          />
        </ColumnContainer>
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
          Submit
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default PaymentForm;
