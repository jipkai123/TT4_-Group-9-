import React from 'react';
import '../App.css';
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Col, Button, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const schema = yup.object().shape({
    userName: yup.string().required('*Required'),
    userPass: yup.string().required('*Required'),
  });
  
  function FormExample() {
    const history = useHistory();
    return (
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm}) => {
            const { userName, userPass, saveLogin } = values;
            //localStorage.setItem('saveLogin', saveLogin);
            //localStorage.setItem('userName', saveLogin ? userName : '');
            //localStorage.setItem('userPass', saveLogin ? userPass : '');
            axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
            JSON.stringify({userName, userPass}),
            {
                headers: {
                    "x-api-key": 'Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m',
                },
                data: {userName, userPass}
            })
            .then((res) => {
                console.log(res)
                sessionStorage.setItem("custID", res.data["custID"])
                sessionStorage.setItem("accountKey", res.data["accountKey"])
                history.replace("/home");
            }).catch((error) => {
                alert("You have entered the wrong username or password.")
                console.log(error)
            });
            
             }}
        initialValues={{
          userName: '',
          userPass: '',
          saveLogin: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Container className = 'border'>
          <Form noValidate onSubmit={handleSubmit}>
          <Image className = 'img' src="https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png"/>
              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder= 'Username'
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  onBlur ={handleBlur}
                  isInvalid={touched.userName && !!errors.userName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.userName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder= 'Password'
                  name="userPass"
                  value={values.userPass}
                  onChange={handleChange}
                  onBlur ={handleBlur}
                  isInvalid={touched.userPass && !!errors.userPass}
                />
  
                <Form.Control.Feedback type="invalid">
                  {errors.userPass}
                </Form.Control.Feedback>
              </Form.Group>

            <Form.Group>
              <Form.Check id="validationFormik0" custom>
                <Form.Check.Input
                    name="saveLogin"
                    onChange={handleChange}
                    onBlur ={handleBlur}
                    value={values.saveLogin}
                />
                <Form.Check.Label>Remember Me</Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Button type="submit" variant='danger'>Login</Button>
          </Form>
          </Container>
        )}
      </Formik>
    );
  }
  
  let Login = () => {
    return <FormExample />;
  }
  
  export default Login