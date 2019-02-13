import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Menu from "./Menu"
import "../styles/main.scss"


class Main extends React.Component{
  constructor(){
    super();
    this.menuAction = this.menuAction.bind(this);
    this.state = {
      openMenu: false
    }
  }

  menuAction(){
    this.setState((state) => ({
      openMenu : !state.openMenu,
    }));
  }

  render(){
    const { openMenu } = this.state;
    return( 
      <div className = "wrapper">
        <Menu 
          name = {`menu${openMenu ? ' menu-active': ''}`} 
          handler = {this.menuAction}
        />
        <div className = {`content ${openMenu ? 'content-active': ''}`}>
          <Header/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Main