export const lightTheme = {
  primary: '#F2E8DC',
  secondary: '#3F4556',
  secondaryInactive: '#3F455670',
  tint: '#D9C4B3',

  incomingMessage: '#3F455630',
  outgoingMessage: '#D9C4B3',

  submitButton: '#3F4556',
  submitButtonInactive: '#3F455670',
  submitButtonText: '#F2E8DC',

  white: '#fff',
  black: '#000',
};

export const darkTheme = {
  primary: '#3F4556',
  secondary: '#F2E8DC',
  secondaryInactive: '#F2E8DC70',
  tint: '#626673',

  incomingMessage: '#3F455630',
  outgoingMessage: '#D9C4B3',

  submitButton: '#F2E8DC70',
  submitButtonInactive: '#626673',
  submitButtonText: '#F2E8DC',

  white: '#fff',
  black: '#000',
};

export let theme = 'light';

const currentTheme = theme === 'light' ? lightTheme : darkTheme;

export default currentTheme;
