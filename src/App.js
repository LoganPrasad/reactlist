import React from 'react';
import './App.css';

import Dashboard from './Components/Dashboard';
import Movie from './Components/Movies/Movie'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    
       <Router>
         <div className="app">
    
     <Switch>
          <Route path="/Movies">
            <Movie />
          </Route>
         
          <Route path="/">
          <Dashboard></Dashboard>
          </Route>
        </Switch>
        </div>
     </Router>
   
  );
}

export default App;
