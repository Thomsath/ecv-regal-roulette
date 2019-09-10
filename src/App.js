import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RouteHome from "./components/RouteHome";
import RouteEdit from "./components/RouteEdit";
import RouteWheel from "./components/RouteWheel";

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
