import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";

interface Values {
  userName: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="my-auto">
      <h1 className="flex flex-col items-center mb-8 mt-8 text-2xl font-bold ">
        Sign in
      </h1>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          login(values)
            .then((res) => {
              if (res.data.success) {
                navigate("/");

                localStorage.setItem("token", res.data.data.token);
              }
            })
            .catch((err) => {
              alert("Invalid username or password");
            });
        }}
      >
        <Form className="flex flex-col items-center">
          <label htmlFor="userName">Username</label>
          <Field
            id="userName"
            name="userName"
            className="shadow appearance-none border border-red rounded-lg  py-2 px-3 text-grey-darker mb-3 w-1/4"
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            type="password"
            name="password"
            className="shadow appearance-none border border-red rounded-lg  py-2 px-3 text-grey-darker mb-3 w-1/4"
          />

          <button
            type="submit"
            className="px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-blue-900 w-1/4"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
