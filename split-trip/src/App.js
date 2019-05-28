import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Welcome from './components/Welcome/Welcome'
import Dashboard from './components/Dashboard/Dashboard'
import './styles/App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <Route exact path='/' render={props => <Welcome {...props} />}/>
        <Route path='/login' render={props => <Login {...props} />}/>
        <Route path='/sign-up' render={props => <SignUp {...props} />}/>
        <Route path='/dashboard' render={props => <Dashboard {...props} />}/>
    </Router>
  );
}

export default App;
