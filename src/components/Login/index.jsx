import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import InputText from '../InputText';
import LoginValidation from '../../helpers/validations/login.js'
import LOGIN_MUTATION from "../../helpers/graphql/mutations/login.js"

const Login = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      localStorage.setItem('token', data.login.token);
      navigate('/');
    },
    onError(err) {
      console.log(err.graphQLErrors[0].message);
      setErrores(err.graphQLErrors[0].message);
    },
    variables: {
      ...user
    }
  });

  const handleSubmit = (values) => {
    setErrores({});
    setUser({ ...values });
    try {
      login();
    } catch (error) {
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {
        Object.keys(errores).length > 0 && (
          <div className="relative my-4 py-3 pl-4 pr-10 leading-normal border border-red-200 text-red-700 bg-red-100 rounded-lg" role="alert">
            <p>{errores}</p>
            <span className="absolute inset-y-0 right-0 flex items-center mr-4">
              <svg className="w-4 h-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
          </div>
        )
      }
      <Formik
        initialValues={user}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
        errores={errores}
      >
        {() => (
          <Form>
            <InputText name="email" label="Email" placeholder="Correo electronico" />
            <InputText name="password" label="Password" type="password" placeholder="Contraseña" />
            <button
              className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Iniciar sesión
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login;
