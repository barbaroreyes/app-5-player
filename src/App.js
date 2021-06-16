import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Authentication from './Authentication'
import './App.css';


function App() {
  return (
    <div className="App">
      <Link to='/home'>Home</Link>
      <Switch>
      <Route exact path='/'>hello</Route>
      <Route exact path='/home'>
        <Authentication/>
      </Route>
      </Switch>
   
    </div>
  );
}

export default App;
