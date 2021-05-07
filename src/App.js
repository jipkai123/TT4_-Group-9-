import logo from './logo.svg';
import './App.css';
import './styles.scss';
import React, { Component, lazy, Suspense } from 'react';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Login from './Components/Login';
import { withRouter } from 'react-router';
import NotFound  from './Components/NotFound';
import NavBar from './Components/NavBar';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
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
        <NavBar />
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Login} />
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