import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './Components/PrivateRoute';
import ViewBalance from './Components/ViewBalance';
import TransactionHistory from './Components/TransactionHistory';

//import Components here

function App() {
  let routes;

	routes = (
		<Switch>
      <PrivateRoute path="/home" component={ViewBalance} />
      <PrivateRoute path="/transactions" component={TransactionHistory} />
      <Route exact path='/login' component={Login} />
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>
		</Switch>
	);

  return (
		<div className="App">
			<Router>{routes}</Router>
		</div>
  );
};

export default App;
