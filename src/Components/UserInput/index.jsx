import { Formik, Form, Field, ErrorMessage } from "formik";
import { TO_DO_LIST_SCHEME } from "../../Utils/ValidationSchemas";
import styles from "./userInput.module.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/taskSlice";

export default function UserInput(props) {
  const startingFormState = {
    text: "",
  };
  const dispatch = useDispatch();
  const submitForm = (values, formikBag) => {
    dispatch(addTask({ values, id: Date.now() }));
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={TO_DO_LIST_SCHEME}
        initialValues={startingFormState}
        onSubmit={submitForm}
        validateOnChange={false}
      >
        <Form>
          <Field
            className={styles.input}
            name="text"
            placeholder="write down your task"
            type="text"
          />
          <ErrorMessage name="text">
            {(message) => <div className={styles.error}>{message}</div>}
          </ErrorMessage>
        </Form>
      </Formik>
    </div>
  );
}
