import React from 'react'
import {Redirect} from "react-router-dom"
import "../styles/header.scss"

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      exit: false
    }
  }
  
  render(){
    if (this.state.exit) {
      return <Redirect to = "/"/>
    }
    return(
      <header className="header">
        <div className="exit">
          <button className = "user-exit" onClick = {() => this.setState({exit: true})}>Выйти</button>
        </div>
      </header>
    )
  }
}

export default Header