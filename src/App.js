import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import './App.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminHome from './Components/AdminHome/AdminHome';
import UserTasks from './Components/UserTasks/UserTasks';
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div className="App">
       <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
        <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/adminHome">
            <AdminHome />
          </Route>
          <Route exact path="/userTasks">
            <UserTasks/>
          </Route>
          <PrivateRoute path="/register/:taskName">
            <Register />
          </PrivateRoute>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>

      </Router>
      </UserContext.Provider>
    </div>
    
  );
}

export default App;
