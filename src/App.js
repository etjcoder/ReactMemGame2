import React from 'react';
import GameContainer from "./components/GameContainer"
import NavBar from "./components/NavBar"
import About from "./components/About"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Route exact path={process.env.PUBLIC_URL + '/'} component={About} />
          <Route exact path={process.env.PUBLIC_URL + '/play'} component={GameContainer} />
      </div>
    </Router>
  );
}

export default App;
