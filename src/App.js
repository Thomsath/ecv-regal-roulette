import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RouteHome from "./components/Home/RouteHome";
import RouteEdit from "./components/Edit/RouteEdit";
import RouteWheel from "./components/Wheel/RouteWheel";

function App() {
  return (
      <Router>
          <Route exact path="/" component={RouteHome} />
          <Route exact path="/edit" component={RouteEdit} />
          <Route exact path="/wheel" component={RouteWheel} />
      </Router>
  );
}

export default App;
