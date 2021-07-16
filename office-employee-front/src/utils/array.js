export const generateArray = (from, to, orderBy = "asc") => {
  const arr = Array.from(Array(to - from + 1), (_, i) => i + from);
  if (orderBy === "desc") {
    return arr.sort((a, b) => b - a);
  }
  return arr;
};
