import { generateArray } from "./array";

export const dayValues = () => {
  const values = [];
  generateArray(1, 31).forEach((day) => {
    values.push({ name: day < 10 ? `0${day}` : `${day}`, value: day });
  });
  return values;
};

export const monthValues = () => [
  { name: "Jan", value: 1 },
  { name: "Feb", value: 2 },
  { name: "Mar", value: 3 },
  { name: "Apr", value: 4 },
  { name: "May", value: 5 },
  { name: "Jun", value: 6 },
  { name: "Jul", value: 7 },
  { name: "Aug", value: 8 },
  { name: "Sep", value: 9 },
  { name: "Octr", value: 10 },
  { name: "Nov", value: 11 },
  { name: "Dec", value: 12 },
];

export const yearValues = (from = 1901, to = 2021) => {
  const values = [];
  generateArray(from, to, "desc").forEach((year) =>
    values.push({ name: `${year}`, value: year })
  );
  return values;
};
