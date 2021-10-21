import { useMutation } from 'react-query';
// import { Link } from 'react-router-dom'
import Card from '../ui/Card';
import { Formik, Form } from 'formik';
import classes from './NewRecordForm.module.css';
import * as Yup from 'yup';
import { TextField } from './TextField';
import { useQueryClient } from 'react-query';


function NewRecordForm(props) {
  const { record } = props;
  const queryClient = useQueryClient();

  const addRecord = async (enteredMeetupData) => {
    if (enteredMeetupData.id === '') {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      queryClient.invalidateQueries("records")
      return data;

    } else {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      queryClient.invalidateQueries("records")
      return data;
    }
  }

  const mutation = useMutation((newRecord) => addRecord(newRecord), { mutationKey: "insert" });
  const { isLoading, isError, error, isSuccess } = mutation;

  function submitHandler(values) {
    const meetupData = {
      email: values.email,
      password: values.password,

      id: record.id
    };
    mutation.mutate(meetupData);
    var form = document.getElementById("myForm");
    form.reset();
  }

  const validate = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required'
    )
  });

  return (
    <Card>
      <Formik
        initialValues={record}
        validationSchema={validate}
        onSubmit={(values) => submitHandler(values)}
        enableReinitialize
        validateOnMount
      >
        {formik => (
          <Form className={classes.form} id='myForm'>
            <TextField type="hidden" name="id" />
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <TextField type="email" name="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <TextField type="password" name="password" />
            </div>
            <div className={classes.actions}>
              <button type="Submit" disabled={!formik.isValid}>Sign up</button>
            </div>
            <div className={classes.control}>
              <h4>Already have an Account?</h4>
              <a href='/login'>login</a>
            </div>
          </Form>
        )}
      </Formik>
      {isError && <div>An error occurred: {error.message}</div>}

      {isLoading && <div>Loading...</div>}

      {isSuccess && <div>success</div>}
    </Card>
  );
}

export default NewRecordForm;
