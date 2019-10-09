import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, SignUp, Main } from './views'
import NavBar from './components/NavBar/NavBar'
import PrivateRoute from './components/Auth/PrivateRoute'

class App extends React.Component {

  state = {
    loggedIn: false
  }

  handleNav = auth => {
    this.setState({
      loggedIn: auth
    })
  }

  render() {
    return (
      <Router>
        <NavBar log={this.state.loggedIn} handleNav={this.handleNav} />
        <Route exact path='/' render={props => <Login {...props} handleNav={this.handleNav} />} />
        <Route path='/sign-up' render={props => <SignUp {...props} />} />
        <PrivateRoute path='/dashboard' component={Main} />
      </Router>
    )
  }
}

export default App