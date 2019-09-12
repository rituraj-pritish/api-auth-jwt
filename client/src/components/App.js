import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Form from './form/Form';

const auth = false

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/dashboard' component={auth ? Dashboard : Form} />
      </div>
    </Router>
  );
};

export default App;
