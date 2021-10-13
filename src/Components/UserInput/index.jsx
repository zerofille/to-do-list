import { Formik, Form, Field } from "formik";
export default function UserInput(props) {
  const startingFormState = {
    text: '',
  };
  const submitForm = (values, formikBag) => {
    console.log(values);

    const {tasks, setTasks} = props;
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
    <Formik initialValues={startingFormState} onSubmit={submitForm}>
      <Form>
        <Field name="text" placeholder="write down your task" type="text" />
        <button type="submit">ADD TASK</button>
      </Form>
    </Formik>
  );
}
