import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';



function App() {

  const[ {user} ,dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <Login/>
      ) : (


        <div className="app_body">

        <Router>
        <Sidebar/>
  
          <Switch>
            <Route path='/rooms/:roomId'>
               <Chat/>
            </Route>
            <Route path='/'>
               <Chat/>
            </Route>
          </Switch>
  
        </Router>
         
          
        </div>
      )}
    
     
    </div>
  );
}

export default App;
