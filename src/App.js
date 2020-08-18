import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chatwindow from './Components/Chatwindow';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
          )
            : (
          <>
          <Header/>
            <div className="app__body">
              <Sidebar/>
              <Switch>
                <Route path="/room/:roomId">
                  <Chatwindow/>
                </Route>
                <Route path="/">
                  <h1>HELLO!</h1>
                </Route>
              </Switch>
            </div>
          </>)
        }
      </Router>
    </div>
  );
}

export default App;
