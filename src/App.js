import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Authentication from './Authentication'
import HomePage from './components/HomePage'
import './App.css';


function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/categories'>Categories</Link>
      
      <Switch>
      <Route exact path='/'>
      <HomePage/>

      </Route>
      <Route exact path='/categories'>
        <Authentication/>
        </Route>
        <Route exact path='/categories/category'>
        category
        </Route>
      </Switch>
   
    </div>
  );
}

export default App;
