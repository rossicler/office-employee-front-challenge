export const paymentTypeToString = (paymentType) => {
  const typeObj = {
    mastercard: "Master Card",
    visacard: "Visa Card",
  };
  return typeObj[paymentType];
};

export const countryToString = (country) => {
  // function create in case of new countries with multiple words in the name, like United States
  const typeObj = {
    australia: "Australia",
    america: "America",
  };
  return typeObj[country];
};

export const genderToString = (genderType) => {
  const typeObj = {
    M: "Male",
    F: "Female",
  };
  return typeObj[genderType];
};
