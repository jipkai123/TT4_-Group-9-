import React, { useState, useEffect } from 'react';
import '../App.css';
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Col, Button, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EGift.css"
import axios from 'axios';

var amountSchema = yup.number().required('*Required').min(1)

var initialSchema = yup.object().shape({
	payeeID: yup.number().required('*Required').min(1),
	amount: amountSchema,
	message: yup.string().notRequired(),
	isEGift: yup.boolean().notRequired()
})

function getBalance(custID, accountKey, setAvailableBal, setSchema) {
	axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts',
	JSON.stringify({custID, accountKey}),
		{
			headers: { "x-api-key": 'Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m' },
			data: {custID, accountKey}
		}
	)
		.then((res) => {
			console.log(res.data[0]);
			setAvailableBal(res.data[0].availableBal);
			setSchema(yup.object().shape({
				payeeID: yup.number().required('*Required'),
				amount: amountSchema.concat(yup.number().max(res.data[0].availableBal)),
				message: yup.string().notRequired(),
				egift: yup.boolean().notRequired()
			}))
		}).catch((error) => {
			alert("Unable to retrieve account information.");
			if (error.response) {
				console.log(error.response.data)
			}
		});
}

function sendEGift(payeeID, amount, custID, accountKey, message, eGift, setAvailableBal, setSchema, setIsSending) {
	axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',
	JSON.stringify({payeeID, amount, custID, message, accountKey, eGift}),
		{
			headers: { "x-api-key": 'Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m' },
			data: {payeeID, amount, custID, message, accountKey, eGift}
		}
	)
		.then((res) => {
			console.log(res);
			getBalance(custID, accountKey, setAvailableBal, setSchema);
			alert(res.data.message);
			setIsSending(false);
		}).catch((error) => {
			alert("You have entered the wrong payeeID.")
			console.log(error.response.data)
		});
}

function EGiftForm() {
	const custID = parseInt(sessionStorage.getItem('custID'));
	const accountKey = sessionStorage.getItem('accountKey');
	var [availableBal, setAvailableBal] = useState([]);
	var [schema, setSchema] = useState(initialSchema);
	var [isSending, setIsSending] = useState(false);
	console.log(custID, accountKey)
	useEffect(() => {
		getBalance(custID, accountKey, setAvailableBal, setSchema);
	}, []);
	return (
		<Formik
			validationSchema={schema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setIsSending(true);
				const eGift = true;
				const { payeeID, amount, message } = values;
				console.log(message)
				sendEGift(payeeID, amount, custID, accountKey, message, eGift, setAvailableBal, setSchema, setIsSending);
			}}
			initialValues={{
				payeeID: '',
				amount: '',
				message: '',
				isEGift: false
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
						<div className="image-bar">
							<Image className='img-image-bar' src="https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png"/>
							<Image className='img-image-bar' src="egift.png"/>
						</div>
						<p>{`Available Balance: ${availableBal}`}</p>
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
								{errors.payeeID}
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
						<Button type="submit" disabled={isSending} variant='danger'>
							{isSending ?
									<>
										<i
											className="fa fa-spinner fa-spin"
											style={{ marginRight: "5px" }}
										/>
										<span>Sending eGift..</span>
									</>
								:
								<span>Send eGift!</span>
							}
						</Button>
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