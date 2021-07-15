import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav"
import HomePage from "./components/HomePage/HomePage"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"

import "./styles/index.scss";



const App = () => {
  return (
    <BrowserRouter basename="/NEW_Portfolio">
      	<Nav />
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<Route path="/skills" component={Skills} />
			<Route path="/contact" component={Contact} />
		</Switch>
    </BrowserRouter>
  );
};

export default App;
