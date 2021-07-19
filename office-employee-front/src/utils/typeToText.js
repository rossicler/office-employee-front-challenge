export const paymentTypeToString = (paymentType) => {
  const typeObj = {
    mastercard: "Master Card",
    visacard: "Visa Card",
  };
  if (!typeObj.hasOwnProperty(paymentType)) return "";
  return typeObj[paymentType];
};

export const countryToString = (country) => {
  // function create in case of new countries with multiple words in the name, like United States
  const typeObj = {
    australia: "Australia",
    america: "America",
  };
  if (!typeObj.hasOwnProperty(country)) return "";
  return typeObj[country];
};

export const genderToString = (genderType) => {
  const typeObj = {
    M: "Male",
    F: "Female",
  };
  if (!typeObj.hasOwnProperty(genderType)) return "";
  return typeObj[genderType];
};
