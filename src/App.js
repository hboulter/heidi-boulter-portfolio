import React from "react";
import "./App.css";
import Sidebar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Portfolio from "./views/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Sidebar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
