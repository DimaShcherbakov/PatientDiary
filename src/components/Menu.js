import React from "react";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from "react-router-dom";
import "../styles/menu.scss";

class Menu extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className = {this.props.name}>
        <div className = "menu-btn" onClick = {this.props.handler}>
          <IconButton>
            <MenuIcon/>
          </IconButton>
        </div>
        <nav className = "menu-list">
          <div className = "info-wrap">
            <div className = "image">
              <img src="../assets/ava.jpg" alt="ava" width="60" height="60"/>
            </div>
            <div>
              <p>Last Name</p>
              <p>First Name</p>
              <p>Third Name</p>
              <p>Change info</p>
            </div>
          </div>
          {/* <div>
            <Link to = "/main/myself">
              Личный кабинет
            </Link>
          </div>
          <div>
            <Link to = "/main/patients">
              Мои пациенты
            </Link>
          </div>
          <div>
            <Link to = "/main/notifications">
              Уведомления
            </Link>
          </div>
          <div>
            <Link to = "/main/messanges">
              Сообщения
            </Link>
          </div> */}
        </nav>
      </div>
    )
  }
}

export default Menu;