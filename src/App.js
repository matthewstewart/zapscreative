import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="viewport-container">
          <Switch>
            <Route exact path="/about" render={(props) => (<div>About Page</div>)} />
            <Route exact path="/login" render={(props) => (<div>Login Page</div>)} />
            <Route exact path="/signup" render={(props) => (<div>Signup Page</div>)} />
            <Route exact path="/profile" render={(props) => (<div>User Profile Page</div>)} />
            <Route exact path="/" render={(props) => (<div>Landing Page</div>)} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
