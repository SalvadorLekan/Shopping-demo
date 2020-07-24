import React from 'react';
import HomePage from './components/HomePage/HomePage';
import { Switch,Route } from 'react-router-dom'
import DeskTops from './components/DeskTops/DeskTops';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/:products' component={DeskTops}></Route>
      </Switch>
      
      
    </>
  );
}

export default App;
