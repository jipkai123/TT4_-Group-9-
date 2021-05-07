import React from 'react';
import '../App.css';
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Col, Button, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const schema = yup.object().shape({
	payeeID: yup.number().required('*Required'),
	amount: yup.number().required('*Required'),
	message: yup.string().notRequired()
});

function EGiftForm() {
	return (
		<Formik
			validationSchema={schema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				const custID = parseInt(sessionStorage.getItem('custID'));
				const accountKey = sessionStorage.getItem('accountKey');
				console.log(custID, accountKey)
				const eGift = true;
				const { payeeID, amount } = values;
				axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',
				JSON.stringify({payeeID, amount, custID, accountKey, eGift}),
				{
					headers: { "x-api-key": 'Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m' },
					data: {payeeID, amount, custID, accountKey, eGift}
				})
					.then((res) => {
						console.log(res)
						alert(res.data.message)
					}).catch((error) => {
						alert("You have entered the wrong payeeID.")
						console.log(error.response.data)
					});
			}}
			initialValues={{
				payeeID: '',
				amount: '',
				message: ''
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
							<Form.Label>Payee ID</Form.Label>
							<Form.Control
								type="number"
								placeholder= 'Payee ID'
								name="payeeID"
								value={values.payeeID}
								onChange={handleChange}
								onBlur ={handleBlur}
								isInvalid={touched.payeeID && !!errors.payeeID}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.amount}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="12" controlId="validationFormik02">
							<Form.Label>Amount</Form.Label>
							<Form.Control
								type="number"
								placeholder= 'Amount'
								name="amount"
								value={values.amount}
								onChange={handleChange}
								onBlur ={handleBlur}
								isInvalid={touched.amount && !!errors.amount}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.amount}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="12" controlId="validationFormik03">
							<Form.Label>Message</Form.Label>
							<Form.Control
								as="textarea"
								rows="5"
								placeholder= 'Message'
								name="message"
								value={values.message}
								onChange={handleChange}
								onBlur ={handleBlur}
							/>
						</Form.Group>
						<Button type="submit" variant='danger'>Send eGift!</Button>
					</Form>
				</Container>
			)}
		</Formik>
	);
}

let EGift = () => {
	return <EGiftForm />;
}

export default EGift