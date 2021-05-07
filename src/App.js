import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

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
}


export default App;

/*
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';


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

export default App;*/