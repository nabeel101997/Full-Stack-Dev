import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import AuthContext from '../../store/auth-context';
import { toast } from 'react-toastify';
import Card from '../ui/Card';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import classes from './LoginForm.module.css';
import * as Yup from 'yup';
import { TextField } from './TextField';
import 'react-toastify/dist/ReactToastify.css';


function LoginForm() {

  const authCtx = useContext(AuthContext);

  const router = useRouter();

  const initialValues = {
    email: '',
    password: '',
  }
  const queryClient = useQueryClient();

  const userLogin = async (loginData) => {
    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    queryClient.invalidateQueries("records")
    return data;
  }

  const mutation = useMutation((newLogin) => userLogin(newLogin), { mutationKey: "login" });
  const { data, isLoading, isError, error, isSuccess } = mutation;
  toast(data?.message);
  if (data?.status === 200) {
    authCtx.login(data?.accessToken);
    window.localStorage.setItem("accessToken", data?.accessToken);
    router.push('/profile')
  }

  function submitHandler(values) {
    const loginData = {
      email: values.email,
      password: values.password,
    };
    mutation.mutate(loginData);
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
        initialValues={initialValues}
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
              <button type="Submit" disabled={!formik.isValid}>Login</button>
            </div>
            <div className={classes.display}>
              <h4 className={classes.h4}>Don't have an Account?</h4>
              <a className={classes.a} href='/'>SignUp</a>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default LoginForm;
