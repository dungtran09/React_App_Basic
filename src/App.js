import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import POPOSList from "./components/POPOSList/POPOSList";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <POPOSList />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
