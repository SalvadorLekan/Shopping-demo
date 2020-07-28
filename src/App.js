import React from 'react';
import HomePage from './components/HomePage/HomePage';
import { Switch,Route } from 'react-router-dom'
import DeskTops from './components/DeskTops/DeskTops';
import Shop from './components/Shop/Shop';
import SignIn from './components/sign-in/SignIn';
import {auth} from './firebase/FireBaseUtil'
import Nav from './components/Nav/Nav';

 class App extends React.Component {
 constructor(props) {
   super(props)
 
   this.state = {
      CurrentUser: null
   }
 }
 
 componentDidMount(){
   auth.onAuthStateChanged(user=>this.setState({CurrentUser: user}, console.log(user  )))
 }

 render(){ return (
    <>
      <Nav userstate={this.state.CurrentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={Shop}></Route>
        <Route exact path='/signin' component={SignIn}></Route>
      <Route exact path='/:DeskTops' component={DeskTops}></Route>
      </Switch>
      
      
    </>
  );}
}

export default App;
