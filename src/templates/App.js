import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomepageUsers from './pages/Homepage';
import CategoryUsers from './pages/Category';

import NoMatch from './pages/NoMatch';

import './../public/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <Router>
      	<Switch>
	        <Route exact path="/" component={HomepageUsers} />
          <Route exact path="/category" component={CategoryUsers} />
	   
	        <Route component={NoMatch}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
