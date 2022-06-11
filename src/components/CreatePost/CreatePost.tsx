import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  title: string;
  content: string;
}

const CreatePost = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {}}
      >
        <Form className="flex flex-col items-center">
          <Field name="title" type="text" placeholder="enter your blog title" />
          <Field
            name="content"
            placeholder="enter your blog text"
            as="textarea"
          />
          <button type="submit">Submit your blog post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
