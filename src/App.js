import logo from './logo.svg';
import './App.css';
//import Components here

function App() {
  let routes;

	routes = (
		<Switch>
			<PrivateRoute path="/home" component={ViewBalance} />
			<PrivateRoute path="/AddTransaction" component={AddTransaction} />
			<PrivateRoute path="/TransactionHistory" component={TransactionHistory} />
      <Route exact path='/login' component={Loginpage} />
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
