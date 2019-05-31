import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
// import Welcome from './components/Welcome/Welcome'
import NewTrip from './components/Dashboard/Addnewtrip/NewTrip';
import Dashboard from './components/Dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute' 
import './styles/App.css';

function App() {
  return (
    <Router>
        <NavBar />
        {/* <Route exact path='/' render={props => <Welcome {...props} />}/> */}
        <Route exact path='/' render={props => <Login {...props} />}/>
        <Route path='/sign-up' render={props => <SignUp {...props} />}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/dashboard/new-trip' component={NewTrip} />
        <PrivateRoute path='/dashboard/all'  />
        <PrivateRoute path='/dashboard/current'  />
        <PrivateRoute path='/dashboard/past'  />
    </Router>
  );
}

export default App;
