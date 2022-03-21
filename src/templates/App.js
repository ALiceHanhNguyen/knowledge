import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Category from './pages/Category';
import RecommentQuestion from './pages/RecommentQuestion';

import NoMatch from './pages/NoMatch';

import './../public/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <Router>
      	<Switch>
	        <Route exact path="/" component={Homepage} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/recomment-questions" component={RecommentQuestion} />
	   
	        <Route component={NoMatch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
