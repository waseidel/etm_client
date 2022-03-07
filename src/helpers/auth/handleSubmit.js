const navigate = useNavigate();

const handleSubmit = async (values) => {
  setErrores({});
  setUser({ ...values });
  try {
    const { data } = await login();
    dispatch(setUser({
      token: data.login.token,
      loggedIn: true
    }));
    navigate('/');
  } catch (err) {
    console.log(err);
    if (err.graphQLErrors) {
      setErrores(err.graphQLErrors[0].message);
    }
  }
};

export default handleSubmit;
