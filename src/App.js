import "./App.css";
import React,{useEffect} from "react";
import Header from "./Header.js"
import Home from "./Home.js";
import Checkout from "./Checkout.js"
import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
import Login from "./Login.js";
import {auth} from './firebase'
import {useStateValue} from "./StateProvider";

function App() {
 const[{user},dispatch]=useStateValue();

  useEffect(() => {
    //will run once when the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log('USER IS ',authUser);
      if(authUser){
        //the user just logged in or the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
      })
     }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
      })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
        <Switch>
       <Route path="/login">
         <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
         <Checkout/>
        </Route>
        <Route path="/">
        <Header/>
         <Home/>
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
