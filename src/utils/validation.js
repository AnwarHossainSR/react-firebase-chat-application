export const loginValidation = (values) => {
  const errors = {};
  if (!values.email) errors.email = 'Email is required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) errors.password = 'Password is required';
  return errors;
};

export const registerValidation = (values) => {
  const errors = {};
  if (!values.firstName) errors.firstName = 'First name is required';
  if (!values.lastName) errors.lastName = 'Last name is required';
  if (!values.email) errors.email = 'Email is required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) errors.password = 'Password is required';
  else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  return errors;
};
