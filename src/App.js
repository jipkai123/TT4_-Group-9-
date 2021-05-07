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

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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