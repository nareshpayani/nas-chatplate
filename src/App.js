import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chatwindow from './Components/Chatwindow';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';

function App() {

 
  const [{user}] = useStateValue();

  return (
    <div className="app">
      <Router>

      {!user ? (
        <Login />
      ) : (
        <>
        {/* Header */}
        <Header/>
        <div className="app__body">
          {/* SideBar */}
          <Sidebar />

            <Switch>
              <Route path="/room/:roomId">
                  <Chatwindow/>
              </Route>
              <Route path="/">
                  <h1>nthplace</h1>
              </Route>
            </Switch>
          {/* Chat Screen */}
        </div>
        </>

      )}

      
      </Router>
      
    </div>
  );
}

export default App;
