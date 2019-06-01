import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
// import Welcome from './components/Welcome/Welcome'
import NewTrip from './components/Dashboard/Addnewtrip/NewTrip';
import Dashboard from './components/Dashboard/Dashboard'
import PastTrips from './components/Dashboard/PastTrips/PastTrips'
import AllTrips from './components/Dashboard/AllTrips/AllTrips'
import CurrentTrips from './components/Dashboard/CurrentTrips/CurrentTrips'
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
        <PrivateRoute path='/dashboard/all' component={AllTrips}/>
        <PrivateRoute path='/dashboard/current'  component={CurrentTrips} />
        <PrivateRoute path='/dashboard/past' component={PastTrips}/>
    </Router>
  );
}

export default App;
