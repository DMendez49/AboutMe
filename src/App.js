import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import NoMatch from "./components/NoMatch";
import RailsView from './components/RailsView';
import Conection from "./components/Conection"


const App = () => (
  
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/RailsView" component={RailsView} />
        <Route exact path="/Conection" component={Conection} />
        <Route component={NoMatch}/>
      </Switch>
    </Router>

);

export default App;

