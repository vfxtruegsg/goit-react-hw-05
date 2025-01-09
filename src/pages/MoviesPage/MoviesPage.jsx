import { Formik, Form, Field } from "formik";
import css from "./MoviesPage.module.css";
import toast from "react-hot-toast";

const MoviesPage = () => {
  const initialValues = {
    movieQuery: "",
  };

  const handleSubmit = (values, actions) => {
    if (!values.movieQuery) {
      toast.error("Field is empty, please enter your query...");
      return;
    }
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field
          className={css.field}
          type="text"
          name="movieQuery"
          placeholder="Enter movie title"
        />
        <button className={css.subbtn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default MoviesPage;
