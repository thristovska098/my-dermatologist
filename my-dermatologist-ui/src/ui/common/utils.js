// @flow

export const prepareDate = (dateOfBirth: Object): string => {
  const day = dateOfBirth._d.getDate();
  const month = dateOfBirth._d.getMonth() + 1;
  const year = dateOfBirth._d.getFullYear();

  const preparedMonth = month < 10 ? `0${month}` : month;
  const preparedDay = day < 10 ? `0${day}` : day;

  return `${year}-${preparedMonth}-${preparedDay}`;
};
