import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './Components/PrivateRoute';

//import Components here

function App() {
  let routes;

	routes = (
		<Switch>
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
