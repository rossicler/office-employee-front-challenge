import React from "react";
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

const PaymentForm = () => {
  return (
    <Form>
      <InputContainer>
        <TextField label="Bank Name" name="bankName" />
      </InputContainer>

      <InputContainer>
        <TextField label="Holder Name" name="holderName" />
      </InputContainer>

      <InputContainer>
        <DateContainer>
          <Typography variant="body2" color="textPrimary" paragraph={true}>
            Expiry Date *
          </Typography>
          <DateInputsContainer>
            <TextFieldSelect
              label="Day"
              name="expiryDay"
              options={dayValues()}
            />

            <TextFieldSelect
              label="Month"
              name="expiryMonth"
              options={monthValues()}
            />

            <TextFieldSelect
              label="Year"
              name="expiryYear"
              options={yearValues()}
            />
          </DateInputsContainer>
        </DateContainer>
      </InputContainer>
      <InputContainer>
        <TextFieldSelect
          label="Payment Type"
          name="paymentType"
          options={[
            { name: "Master Card", value: "mastercard" },
            { name: "Visa Card", value: "visacard" },
          ]}
        />
      </InputContainer>

      <InputContainer>
        <ColumnContainer style={{ flex: 2 / 3 }}>
          <TextField label="Card Number" name="cardNumber" />
        </ColumnContainer>
        <ColumnContainer style={{ flex: 1 / 3 }}>
          <TextField label="CVC" name="cvc" />
        </ColumnContainer>
      </InputContainer>
    </Form>
  );
};

export default PaymentForm;
