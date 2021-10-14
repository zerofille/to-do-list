import { Formik, Form, Field, ErrorMessage } from "formik";
import { TO_DO_LIST_SCHEME } from "../../Utils/ValidationSchemas";

export default function UserInput(props) {
  const startingFormState = {
    text: "",
  };
  const submitForm = (values, formikBag) => {
    const { tasks, setTasks } = props;
    const newTask = {
      id: Date.now(),
      isDone: false,
      body: values.text,
    };
    const taskList = [...tasks, newTask];
    setTasks(taskList);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={TO_DO_LIST_SCHEME}
        initialValues={startingFormState}
        onSubmit={submitForm}
      >
        <Form>
          <Field name="text" placeholder="write down your task" type="text" />
          <ErrorMessage name="text">
            {(message) => <div style={{ color: "red" }}>{message}</div>}
          </ErrorMessage>
        </Form>
      </Formik>
    </div>
  );
}
