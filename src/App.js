import './App.css';
import React, { Component, lazy, Suspense } from 'react';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';
import { withRouter } from 'react-router';
import NotFound  from './Components/NotFound';
//import NavBar from './Components/NavBar';
import { Nav,NavDropdown,Form,FormControl,Button,Navbar } from 'react-bootstrap';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ViewBalance from './Components/ViewBalance';

//import Components here

/*
function App() {
  let routes;

	routes = (
		<Switch>
      <PrivateRoute path="/home" component={ViewBalance} />
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
}*/

const LoginRoute = withRouter(
  lazy(() => import(/* webpackChunkName: "Login" */ './Components/Login'))
);



class App extends Component {

  render() {
    return (
      <BrowserRouter>
      
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Login} />
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/login">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
          <PrivateRoute path="/home" component={ViewBalance} />
          <Route exact path="**" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
*/
export default App;