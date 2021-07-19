import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Typography, Button } from "@material-ui/core";

import authenticatedRoute from "../../ui/components/AuthenticatedRoute/AuthenticatedRoute";
import Card from "../../ui/components/Card/Card";
import InfoField from "../../ui/components/InfoField/InfoField";
import * as employeeActions from "../../store/employee-actions";
import * as typeToText from "../../utils/typeToText";
import {
  InfoContainer,
  InfoSection,
} from "../../ui/styles/pages/profile/index.style";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const currentEmployee = useSelector(
    (state) => state.employees.currentEmployee
  );

  const dispatch = useDispatch();

  const loadEmployeeData = useCallback(() => {
    setLoading(true);
    setError(undefined);
    // Using REST API
    // dispatch(employeeActions.getLoggedEmployee())
    dispatch(employeeActions.getLoggedEmployeeGraphQL())
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // Using REST API
        // setError(false, err.response.data.error);
        setError(false, err.message);
      });
  }, [dispatch]);

  useEffect(() => {
    loadEmployeeData();
  }, [loadEmployeeData]);

  if (error) {
    return (
      <Card>
        <Typography>Error trying to fetch data.</Typography>
        <Button color="primary" onClick={() => loadEmployeeData()}>
          Try again!
        </Button>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card>
        <CircularProgress color="primary" />
      </Card>
    );
  }

  return (
    <Card title="My Employee Profile">
      <InfoContainer>
        <Typography variant="h6" paragraph={true}>
          Personal Infomation
        </Typography>
        <InfoSection>
          <InfoField label="First Name" text={currentEmployee.firstName} />
          <InfoField label="Last Name" text={currentEmployee.lastName} />
          <InfoField label="Date of Birth" text={currentEmployee.birthDate} />
          <InfoField
            label="Gender"
            text={typeToText.genderToString(currentEmployee.gender)}
          />
          <InfoField label="Username" text={currentEmployee.username} />
        </InfoSection>

        <Typography variant="h6" paragraph={true}>
          Contact Infomation
        </Typography>
        <InfoSection>
          <InfoField label="Email" text={currentEmployee.email} />
          <InfoField label="Phone" text={currentEmployee.phone} />
          <InfoField label="Address" text={currentEmployee.address} />
          <InfoField
            label="Country"
            text={typeToText.countryToString(currentEmployee.country)}
          />
        </InfoSection>

        <Typography variant="h6" paragraph={true}>
          Office Infomation
        </Typography>
        <InfoSection>
          <InfoField label="Employee ID" text={currentEmployee.employeeId} />
          <InfoField label="Designation" text={currentEmployee.designation} />
          <InfoField label="Department" text={currentEmployee.department} />
          <InfoField label="workingHours" text={currentEmployee.workingHours} />
        </InfoSection>

        <Typography variant="h6" paragraph={true}>
          Payment Infomation
        </Typography>
        <InfoSection>
          <InfoField
            label="Bank Name"
            text={
              currentEmployee.bankInfo ? currentEmployee.bankInfo.bankName : ""
            }
          />
          <InfoField
            label="Holder Name"
            text={
              currentEmployee.bankInfo
                ? currentEmployee.bankInfo.holderName
                : ""
            }
          />
          <InfoField
            label="Expiry Date"
            text={
              currentEmployee.bankInfo
                ? currentEmployee.bankInfo.expiryDate
                : ""
            }
          />
          <InfoField
            label="Payment Type"
            text={typeToText.paymentTypeToString(
              currentEmployee.bankInfo
                ? currentEmployee.bankInfo.paymentType
                : ""
            )}
          />
          <InfoField
            label="Card Number"
            text={
              currentEmployee.bankInfo
                ? currentEmployee.bankInfo.cardNumber
                : ""
            }
          />
          <InfoField
            label="CVC"
            text={currentEmployee.bankInfo ? currentEmployee.bankInfo.cvc : ""}
          />
        </InfoSection>
      </InfoContainer>
    </Card>
  );
};

export default authenticatedRoute(Profile, { pathAfterFailure: "/login" });
