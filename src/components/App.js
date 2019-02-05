import React, { Component } from "react";
import Form from './Form'
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
