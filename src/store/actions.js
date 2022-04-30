export const Login = (username, password) => {
  const token = username;
  return {
    type: 'LOGIN',
    payload: token,
  };
};
