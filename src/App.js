import React from 'react';
import HomePage from './components/HomePage/HomePage';
import { Switch,Route } from 'react-router-dom'
import DeskTops from './components/DeskTops/DeskTops';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={Shop}></Route>
      <Route exact path='/:DeskTops' component={DeskTops}></Route>
      </Switch>
      
      
    </>
  );
}

export default App;
