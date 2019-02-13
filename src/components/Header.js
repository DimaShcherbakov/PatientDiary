import React from 'react'

import "../styles/header.scss"

class Header extends React.Component{
  render(){
    return(
      <header className="header">
        <div className="exit">
          <button className = "user-exit">Выйти</button>
        </div>
      </header>
    )
  }
}

export default Header